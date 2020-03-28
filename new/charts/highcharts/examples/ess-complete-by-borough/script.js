
var yearData = [];
var brooklynData = [];
var bronxData = [];
var manhattanData = [];
var queensData = [];
var statenData = [];



function getData(){
    jQuery.getJSON('/tracker/api/v1/ess-application-history-by-borough/', function(data){
        data.forEach( function(el){
            yearData.push(el.year_completed);
        });
        jQuery.when(
		    jQuery.getJSON('/tracker/api/v1/ess-application-history-by-borough/brooklyn/', function(data) {
		    	var brooklyn = [];
		    	data.forEach( function(el){
		            var it = [];
		    	    it[0] = el.year_completed;
		            it[1] = Number(el.projects_completed);
		    	    brooklyn.push(it);
		        });
		        yearData.forEach( function(yr){
		        	var set = false
		        	brooklyn.forEach( function(nm){
		        		if(yr == nm[0]){
		        			brooklynData.push(nm);
		        			set = true;
		        		}
		        	});
		        	if(!set) {
			        	var it = [];
	        			it[0] = yr;
	        			it[1] = 0
	        			brooklynData.push(it);
	        		}
		        });
		    }),
		    jQuery.getJSON('/tracker/api/v1/ess-application-history-by-borough/bronx/', function(data) {
		    	var bronx = [];
		    	data.forEach( function(el){
		            var it = [];
		    	    it[0] = el.year_completed;
		            it[1] = Number(el.projects_completed);
		    	    bronx.push(it);
		        });
		        yearData.forEach( function(yr){
		        	var set = false
		        	bronx.forEach( function(nm){
		        		if(yr == nm[0]){
		        			bronxData.push(nm);
		        			set = true;
		        		}
		        	});
		        	if(!set) {
			        	var it = [];
	        			it[0] = yr;
	        			it[1] = 0
	        			bronxData.push(it);
	        		}
		        });
		    }),
		    jQuery.getJSON('/tracker/api/v1/ess-application-history-by-borough/manhattan/', function(data) {
		    	var manhattan = [];
		    	data.forEach( function(el){
		            var it = [];
		    	    it[0] = el.year_completed;
		            it[1] = Number(el.projects_completed);
		    	    manhattan.push(it);
		        });
		        yearData.forEach( function(yr){
		        	var set = false
		        	manhattan.forEach( function(nm){
		        		if(yr == nm[0]){
		        			manhattanData.push(nm);
		        			set = true;
		        		}
		        	});
		        	if(!set) {
			        	var it = [];
	        			it[0] = yr;
	        			it[1] = 0
	        			manhattanData.push(it);
	        		}
		        });
		    }),
		    jQuery.getJSON('/tracker/api/v1/ess-application-history-by-borough/queens/', function(data) {
		    	var queens = [];
		    	data.forEach( function(el){
		            var it = [];
		    	    it[0] = el.year_completed;
		            it[1] = Number(el.projects_completed);
		    	    queens.push(it);
		        });
		        yearData.forEach( function(yr){
		        	var set = false
		        	queens.forEach( function(nm){
		        		if(yr == nm[0]){
		        			queensData.push(nm);
		        			set = true;
		        		}
		        	});
		        	if(!set) {
			        	var it = [];
	        			it[0] = yr;
	        			it[1] = 0
	        			queensData.push(it);
	        		}
		        });
		    }),
		    jQuery.getJSON('/tracker/api/v1/ess-application-history-by-borough/staten-island/', function(data) {
		    	var staten = [];
		    	data.forEach( function(el){
		            var it = [];
		    	    it[0] = el.year_completed;
		            it[1] = Number(el.projects_completed);
		    	    staten.push(it);
		        });
		        yearData.forEach( function(yr){
		        	var set = false
		        	staten.forEach( function(nm){
		        		if(yr == nm[0]){
		        			statenData.push(nm);
		        			set = true;
		        		}
		        	});
		        	if(!set) {
			        	var it = [];
	        			it[0] = yr;
	        			it[1] = 0
	        			statenData.push(it);
	        		}
		        });
		    })
		).then(function() {
		    if (brooklynData && bronxData && manhattanData && queensData && statenData) {
		    	Highcharts.chart('container', {
		            chart: {
		                type: 'column'
		            },
		            title: {
		                text: 'Completed Projects by Borough'
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
		            series: [{name: 'Brooklyn', data: brooklynData}, 
		                     {name: 'Bronx', data: bronxData},
		                     {name: 'Manhattan', data: manhattanData},
		                     {name: 'Queens', data: queensData},
		                     {name: 'Staten Island', data: statenData}]
		        });
		        
		    }
		    else {
		        //Err
		    }
		});

    });
}

getData();
