
var yearData = [];
var projectsData = [];
var completeData = [];


function getData(){
    jQuery.getJSON('/tracker/api/v1/ess-projects-per-year/', function(data){
        var aggregateProjects = 0;
        var aggregateComplete = 0;
	data.forEach( function(el){
            var it = [];
            aggregateProjects += Number(el.applications_submitted);
    	    it[0] = el.year_completed;
            it[1] = aggregateProjects;
    	    projectsData.push(it);
        });

        data.forEach( function(el){
            var it = [];
            aggregateComplete += Number(el.projects_completed);
            it[0] = el.year_completed;
            it[1] = aggregateComplete;
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
                text: 'Total Applications and Completed Projects per Year'
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

