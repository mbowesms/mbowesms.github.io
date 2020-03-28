
var yearData = [];
var installedData = [];
var potentialData = [];



function getData(){
    jQuery.getJSON('/tracker/api/v1/ess-application-history-by-borough/', function(data){
        data.forEach( function(el){
            yearData.push(el.year_completed);
        });
        jQuery.when(
		    jQuery.getJSON('/tracker/api/v1/ess-installed-and-potential/installed/', function(data) {
		    	var installed = [];
		    	data.forEach( function(el){
		            var it = [];
		    	    it[0] = el.year_completed;
		            it[1] = parseFloat(el.installed_power)/1000;
		    	    installed.push(it);
		        });
		        yearData.forEach( function(yr){
		        	var set = false
		        	installed.forEach( function(nm){
		        		if(yr == nm[0]){
		        			installedData.push(nm);
		        			set = true;
		        		}
		        	});
		        	if(!set) {
			        	var it = [];
	        			it[0] = yr;
	        			it[1] = 0
	        			installedData.push(it);
	        		}
		        });
		    }),
		    jQuery.getJSON('/tracker/api/v1/ess-installed-and-potential/potential/', function(data) {
		    	var potential = [];
		    	data.forEach( function(el){
		            var it = [];
		    	    it[0] = el.year_completed;
		            it[1] = parseFloat(el.potential_power)/1000;
		    	    potential.push(it);
		        });
		        yearData.forEach( function(yr){
		        	var set = false
		        	potential.forEach( function(nm){
		        		if(yr == nm[0]){
		        			potentialData.push(nm);
		        			set = true;
		        		}
		        	});
		        	if(!set) {
			        	var it = [];
	        			it[0] = yr;
	        			it[1] = 0
	        			potentialData.push(it);
	        		}
		        });
		    })
		).then(function() {
		    if (installedData && potentialData) {
		    	Highcharts.chart('container', {
		            chart: {
		                type: 'column'
		            },
		            title: {
		                text: 'Total Installed and Potential Power (MW)'
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
		            series: [{name: 'Installed Power (MW)', data: installedData}, 
		                     {name: 'Potential Power (MW)', data: potentialData}]
		        });
		        
		    }
		    else {
		        //Err
		    }
		});

    });
}

getData();
