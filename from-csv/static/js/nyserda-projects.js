Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    data: {
        enablePolling: false,
        csvURL: window.location.origin + '/data/nyserda-projects.csv'
    },
    title: {
        text: '<b>NYSERDA Project History</b>'
    },
    subtitle: {
        text: 'Source: NYSERDA DER Map'
    },
    credits: {
        enabled: false
    },
    yAxis: {
        title: {
            text: 'Project Count'
        }
    }, // End chart style

    // series: [{
    //     colors: ['#7EB6EA', '#396096', '#2679B2', '#A7CEE2'],
    //     colorByPoint: true,
    // }]

});