// /tracker/api/v1/ess-division/

var chartData = [];

function getData(){
    jQuery.getJSON('/tracker/api/v1/ess-division/', function(data){
	data.forEach( function(el){
            var it = [];
    	    it[0] = el.division;
            it[1] = Number(el.ess);
    	    chartData.push(it);
        });

        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Total ESS in kW per Division'
            },
            subtitle: {
                text: 'Data Source: Con Edison SIR Inventory (Dec 2019)'
            },
            xAxis: {
        	title: {
        	    text: 'Division'
        	},
                crosshair: true
            },
            yAxis: [{
                title: {
                    text: 'ESS (kW)'
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
		name: '',
                data: chartData

            }]
        });

    });
}

getData();

/**
var chart = Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total ESS in kW per Division'
    },
    subtitle: {
        text: 'Data Source: Con Edison SIR Inventory (Dec 2019)'
    },
    xAxis: {
	title: {
	    text: 'Division'
	},
        crosshair: true
    },
    yAxis: [{
        title: {
            text: 'ESS (kW)'
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
        data: [{data: []}]

    }]
});
*/
