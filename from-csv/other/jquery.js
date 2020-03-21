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
    // Using jQuery
    $.get('data/test.csv', csv => {
        options.data = {
            csv
        };
        // Highcharts
        Highcharts.chart('container', options)
    });
});

