// Create chart
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Completed ESS Projects per Year'
    },
    subtitle: {
        text: 'Source: Con Edison SIR Inventory (January 2020)'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category',
        labels: {
            style: {
                color: 'gray'
            }
        },
    },
    yAxis: {
        title: {
            text: 'Projects'
        },
        allowDecimals: false,
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                color: 'black',
                style: {
                    fontWeight: 'regular',
                },
                formatter: function(){
                    return (this.y!=0)?this.y:"";
                }
            }
        },
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b> projects<br/>'
    }, // End chart style

    // Series
    series: [{
        name: "Year",
        colors: ['#7EB6EA', '#396096', '#2679B2', '#A7CEE2'],
        colorByPoint: false,
        data: [{
            name: "2012",
            y: 1,
            drilldown: "2012",
        }, {
            name: "2013",
            y: 2,
            drilldown: "2013"
        }, {
            name: "2014",
            y: 2,
            drilldown: "2014"
        }, {
            name: "2015",
            y: 2,
            drilldown: "2015"
        }, {
            name: "2016",
            y: 4,
            drilldown: "2016"
        }, {
            name: "2017",
            y: 4,
            drilldown: "2017"
        }, {
            name: "2018",
            y: 3,
            drilldown: "2018"
        }, {
            name: "2019",
            y: 3,
            drilldown: "2019"
        }, {
            name: "2020",
            y: 0,
            drilldown: "2020"
        }],
    }], 

    // Drilldown
    drilldown: {
        // Drilldown style
        activeAxisLabelStyle: {
            textDecoration: 'none',
            color: 'gray',
        },
        // Drilldown series
        series: [{
            name: '2012',
            id: '2012',
            data: [
                ['Jan', 0],
                ['Feb', 0],
                ['Mar', 0],
                ['Apr', 0],
                ['May', 0],
                ['Jun', 0],
                ['Jul', 0],
                ['Aug', 0],
                ['Sep', 0],
                ['Oct', 1],
                ['Nov', 0],
                ['Dec', 0]
            ]}, {
            name: '2013',
            id: '2013',
            data: [
                ['Jan', 0],
                ['Feb', 0],
                ['Mar', 0],
                ['Apr', 0],
                ['May', 0],
                ['Jun', 1],
                ['Jul', 0],
                ['Aug', 0],
                ['Sep', 0],
                ['Oct', 1],
                ['Nov', 0],
                ['Dec', 0]
            ]}, {
            name: '2014',
            id: '2014',
            data: [
                ['Jan', 0],
                ['Feb', 1],
                ['Mar', 1],
                ['Apr', 0],
                ['May', 0],
                ['Jun', 0],
                ['Jul', 0],
                ['Aug', 0],
                ['Sep', 0],
                ['Oct', 0],
                ['Nov', 0],
                ['Dec', 0]
            ]}, {            
            name: '2015',
            id: '2015',
            data: [
                ['Jan', 0],
                ['Feb', 0],
                ['Mar', 0],
                ['Apr', 1],
                ['May', 0],
                ['Jun', 0],
                ['Jul', 1],
                ['Aug', 0],
                ['Sep', 0],
                ['Oct', 0],
                ['Nov', 0],
                ['Dec', 0]
            ]}, {
            name: '2015',
            id: '2015',
            data: [
                ['Jan', 0],
                ['Feb', 0],
                ['Mar', 0],
                ['Apr', 1],
                ['May', 0],
                ['Jun', 0],
                ['Jul', 1],
                ['Aug', 0],
                ['Sep', 0],
                ['Oct', 0],
                ['Nov', 0],
                ['Dec', 0]
            ]}, {
            name: '2016',
            id: '2016',
            data: [
                ['Jan', 0],
                ['Feb', 0],
                ['Mar', 0],
                ['Apr', 0],
                ['May', 0],
                ['Jun', 0],
                ['Jul', 0],
                ['Aug', 4],
                ['Sep', 0],
                ['Oct', 0],
                ['Nov', 0],
                ['Dec', 0]
            ]}, {
            name: '2017',
            id: '2017',
            data: [
                ['Jan', 0],
                ['Feb', 0],
                ['Mar', 0],
                ['Apr', 0],
                ['May', 0],
                ['Jun', 1],
                ['Jul', 0],
                ['Aug', 0],
                ['Sep', 0],
                ['Oct', 0],
                ['Nov', 0],
                ['Dec', 3]
            ]}, {
            name: '2018',
            id: '2018',
            data: [
                ['Jan', 0],
                ['Feb', 0],
                ['Mar', 1],
                ['Apr', 0],
                ['May', 0],
                ['Jun', 0],
                ['Jul', 0],
                ['Aug', 0],
                ['Sep', 0],
                ['Oct', 2],
                ['Nov', 0],
                ['Dec', 0]
            ]}, {
            name: '2019',
            id: '2019',
            data: [
                ['Jan', 1],
                ['Feb', 0],
                ['Mar', 0],
                ['Apr', 0],
                ['May', 0],
                ['Jun', 0],
                ['Jul', 0],
                ['Aug', 0],
                ['Sep', 0],
                ['Oct', 0],
                ['Nov', 2],
                ['Dec', 0]
            ]}, {
            name: '2020',
            id: '2020',
            data: [
                ['Jan', 0],
                ['Feb', 0],
                ['Mar', 0],
                ['Apr', 0],
                ['May', 0],
                ['Jun', 0],
                ['Jul', 0],
                ['Aug', 0],
                ['Sep', 0],
                ['Oct', 0],
                ['Nov', 0],
                ['Dec', 0]
            ]}
        ] // End drilldown series
    } // End of drilldown
});