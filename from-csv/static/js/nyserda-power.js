Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    data: {
        enablePolling: false,
        csvURL: window.location.origin + '/data/nyserda-power.csv'
    },
    title: {
        text: '<b>NYSERDA - Power and Energy Capacity</b>'
    },
    subtitle: {
        text: 'Source: NYSERDA DER Map'
    },
    credits: {
        enabled: false
    },
    yAxis: {
        title: {
            text: 'Power Capacity (MW)'
        }
    }, // End chart style

    // series: [{
    //     colors: ['#7EB6EA', '#396096', '#2679B2', '#A7CEE2'],
    //     colorByPoint: true,
    // }]

});