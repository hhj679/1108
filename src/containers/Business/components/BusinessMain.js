import React from 'react'
import PropTypes from 'prop-types'

import cloneDeep from 'lodash/cloneDeep'
import Card from '../../Commons/Card'
import ChinaMap from '../../Commons/ChinaMap'

import { lineOption, barOption, pieOption } from '../../../utils/highchartUtils'
import { formatDate } from '../../../utils/dateUtils'

import Highcharts from 'highcharts'

const cardStyle = {
  height: '12rem',
  margin: '0',
  // overflow: 'hidden'
}

export default class BusinessMain extends React.Component {
	constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
        this.initChart = this.initChart.bind(this)
    }

    initChart() {
		const { priceLine, companyMarket } = this.props;

    	const priceLineData = [], priceLineName = [];
	    const priceLineOption = cloneDeep(lineOption);
	    for (var i = 0; i < priceLine.length; i++) {
	      priceLineName.push(priceLine[i].name);
	      priceLineData.push(priceLine[i].y);
	    }
	    priceLineOption.xAxis.categories = priceLineName;
	    priceLineOption.series.push({
	      name: '空间',
	      data: priceLineData
	    })
	    Highcharts.chart(this.priceLineId, priceLineOption);
	    

	    const companyMarketOption = cloneDeep(pieOption);
	    companyMarketOption.series.push({
	      data: companyMarket
	    });
	    Highcharts.chart(this.companyMarketId, companyMarketOption);
    }

    componentDidMount() {
        this.initChart()
    }
        
    componentDidUpdate() {
        this.initChart()
    }

	render() {
		return(
			<div className="business-tab-main">
				<Card title="市场容量" subtitle="近半年市场容量"><ChinaMap/></Card>
                <Card title="产品价格" subtitle="近年价格变化曲线">
                    <div ref={id => this.priceLineId = id} style={cardStyle}></div>
                </Card>
                <Card title="厂商市场份额">
                	<div ref={id => this.companyMarketId = id} style={cardStyle}></div>
                </Card>
			</div>
		)
	}
}

BusinessMain.propTypes = {
    tabIndex: PropTypes.number,
    handleTabChange: PropTypes.func
}