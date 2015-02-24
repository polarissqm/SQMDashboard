
//Flot Pie Chart
$(document).ready(function() {
/*var arr=[{
    label: "passed",
    data: 2000
    
}, {
    label: "Failed",
    data:850
}, {
    label: "Blocked",
    data:200
}, {
    label: "No Run",
    data:1500
}];*/
	
	



var arr=[["passed",20],
         ["failed",30],
         ["noRun",25],
         ["Blocked",25]
];
// var data = arr;
/*
Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
    };
});*/
$('#manual-pie-chart')
	.highcharts(
			{
				chart : {
					plotBackgroundColor : null,
					plotBorderWidth : 1,// null,
					plotShadow : false
					/*backgroundColor: {
				         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
				         stops: [
				            [0, '#2a2a2b'],
				            [1, '#3e3e40']
				         ]
				}*/
				},
				credits : {
					enabled : !0,
					text : "JPMorgan",
					href : "http://www.jpmorganchase.com/",
					position : {
						align : "right",
						x : -10,
						verticalAlign : "bottom",
						y : -5
					},
					style : {
						cursor : "pointer",
						color : "blue",
						fontSize : "9px"
					}
				},
				colors : [ '#4B610B', '#8A0829', '#084B8A', '#B45F04',
						'#2E9AFE', '#4B088A' ],
				title : {
					text : 'Manual Execution status'
					/*style: {
				         color: '#E0E0E3',
				         textTransform: 'uppercase',
				         fontSize: '20px'
				      }*/
				},
				tooltip : {
					pointFormat : '{series.name}: <b>{point.percentage:.1f}%</b>'
				},
				plotOptions : {
					pie : {
						allowPointSelect : true,
						cursor : 'pointer',
						dataLabels : {
							enabled : false
						},
						showInLegend : true
					}
				},
				series : [ {
					type : 'pie',
					name : 'Execution',
					data : arr
				} ]
			});
});
/*
//Flot Pie Chart
$(document).ready(function() {

    var data = [{
        label: "Series 0",
        data: 1
    }, {
        label: "Series 1",
        data: 3
    }, {
        label: "Series 2",
        data: 9
    }, {
        label: "Series 3",
        data: 20
    }];

    var plotObj = $.plot($("#flot-pie-chart2"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});
*/
