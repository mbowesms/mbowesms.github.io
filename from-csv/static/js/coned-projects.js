Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    data: {
        enablePolling: false,
        csvURL: window.location.origin + '/data/coned-projects.csv'
    },
    title: {
        text: '<b>Con Edison Project History</b>'
    },
    subtitle: {
        text: 'Source: Con Edison SIR Inventory (January 2020)'
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