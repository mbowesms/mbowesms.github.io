
var yearData = [];
var projectsData = [];
var completeData = [];


function getData(){
    jQuery.getJSON('/tracker/api/v1/ess-interconnection-application-history/', function(data){
	data.forEach( function(el){
            var it = [];
    	    it[0] = el.year_completed;
            it[1] = Number(el.applications_submitted);
    	    projectsData.push(it);
        });

        data.forEach( function(el){
            var it = [];
            it[0] = el.year_completed;
            it[1] = Number(el.projects_completed);
            completeData.push(it);
        });

        data.forEach( function(el){
            yearData.push(el.year_completed);
        });

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
        	title: {
        	    text: 'Year'
        	},
		categories: yearData,
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
            series: [{name: 'Applications Submitted', data: projectsData}, 
                     {name: 'Projects Completed', data: completeData}]
        });

    });
}

getData();

