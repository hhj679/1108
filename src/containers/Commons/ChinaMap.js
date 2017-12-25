/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import PropTypes from 'prop-types'

import Highcharts from 'highcharts/highmaps'
// import { chinaMapData } from '../../utils/china-map'
// import { chinaMapTranslate } from '../../utils/china-map-translate.js'
import { chinaData } from '../../utils/china'

Highcharts.maps["cn/china"] = chinaData;
// Highcharts.maps["translate/china"] = chinaMapTranslate;

class ChinaMap extends React.Component {
    constructor(props) {
        super(props);
    }

    initMap() {
        var provinces = [{"name":"北京"},{"name":"天津"},{"name":"河北"},{"name":"山西"},{"name":"内蒙古"},{"name":"辽宁"},{"name":"吉林"},{"name":"黑龙江"},{"name":"上海"},{"name":"江苏"},{"name":"浙江"},{"name":"安徽"},{"name":"福建"},{"name":"江西"},{"name":"山东"},{"name":"河南"},{"name":"湖北"},{"name":"湖南"},{"name":"广东"},{"name":"广西"},{"name":"海南"},{"name":"重庆"},{"name":"四川"},{"name":"贵州"},{"name":"云南"},{"name":"西藏"},{"name":"陕西"},{"name":"甘肃"},{"name":"青海"},{"name":"宁夏"},{"name":"新疆"},{"name":"台湾"},{"name":"香港"},{"name":"澳门"},{"name":"南海诸岛"}];

        new Highcharts.Map(this.commonMapId, {
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            mapNavigation: {
                enabled: true
            },
            tooltip: {
                enabled: true,
                useHTML: true,
                headerFormat: "",
                pointFormat: "<span>{point.name}</span>"
            },
            legend: {
                enabled: false
            },
            series: [{
                mapData: Highcharts.maps["cn/china"],
                name: '',
                data: provinces,
                joinBy: 'name',
                // nullColor: 'rgba(200, 200, 200, 0.3)',
                dataLabels: {
                   enabled: true,
                   color: 'black',
                   formatter: function () {
                       return this.key; // 返回中文名称
                   },
                   // style: {
                   //     fontWeight: 'bold'
                   // }
               }
            }]
        })
    }

    componentDidMount() {
        this.initMap()
    }
      
    componentDidUpdate() {
        this.initMap()
    }

    render() {
        return (
            <div ref={id => this.commonMapId = id}></div>
        )
    }
}
//严格来说，这些暴露给外部的参数都需要做验证,常用的验证类型为array，bool，func，number，object，string
ChinaMap.propTypes = {
    
}
export default ChinaMap