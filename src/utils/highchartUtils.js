import Highcharts from 'highcharts'

export const barOption = {
    chart: {
        type: 'column'
    },
    title: {
        text: ' '
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: ''
        }

    },
    credits: { 
        enabled:false 
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name:'',
        colorByPoint: true,
        data: []
    }]
}

export const lineOption = {
    chart: {
        type: 'line'
    },
    title: {
        text: ''
    },
    credits: { 
        enabled:false 
    },
    legend: {
        enabled: false
    },

    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true
        }
    },
    series: []
}

export const pieOption = {
	chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    credits: { 
        enabled:false 
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: []
}
