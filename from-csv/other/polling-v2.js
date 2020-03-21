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

    // Polling
    options.data = {
        csvURL: 'http://localhost:8000/data/test.csv',
        enablePolling: true,
        dataRefreshRate: 2
    }
    // Highcharts
    Highcharts.chart('container', options);

});

