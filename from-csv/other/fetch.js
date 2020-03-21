document.addEventListener('DOMContentLoaded', () => {
    const options = {
        chart: {
            type: 'column',
            zoomType: 'xy'
        },
        title: {
            text: 'Chart from CSV'
        },
        yaxis: {
            title: {
                text: 'Fruits eaten'
            }
        }
    };
    // Using fetch
    fetch('data/test.csv').then(res => {
        return res.text();
    }).then(csv => {
        options.data = {
            csv
        };
        // Highcharts 
        Highcharts.chart('container', options);
    });
});

