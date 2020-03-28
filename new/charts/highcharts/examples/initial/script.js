Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'NYC ESS Interconnection Application History'
    },
    subtitle: {
        text: 'Data Source: Con Edison SIR Inventory (Dec 2019)'
    },
    xAxis: {
        categories: [
            '2012', 
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
            '2019'
        ],
        crosshair: true
    },
    yAxis: [{
        title: {
            text: 'Project Count'
        }
    }],

    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Total Applications',
        data: [3, 2, 9, 0, 2, 7, 7, 39]

    }, {
        name: 'Completed Projects',
        data: [3, 2, 8, 0, 1, 5, 2, 0]

    }]
});