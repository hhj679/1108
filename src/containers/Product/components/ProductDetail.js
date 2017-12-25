import React from 'react'
import PropTypes from 'prop-types'

import cloneDeep from 'lodash/cloneDeep'
import Chip from 'material-ui/Chip'
import Card from '../../Commons/Card'
import Table from '../../Commons/Table'

import Competitive from './Competitive'

import { lineOption, barOption, pieOption } from '../../../utils/highchartUtils'
import { formatDate } from '../../../utils/dateUtils'

import Highcharts from 'highcharts'

import '../styles/product.less'

const cardStyle = {
  height: '16rem',
  margin: '0',
  overflow: 'hidden'
  // borderStyle: 'groove none'
}

const chipStyle = {
  margin: 4
}


class ProductDetail extends React.Component  {
  constructor(props) {
    super(props)
    this.initPie = this.initPie.bind(this)
    this.handleClickCompetitiveItem = this.handleClickCompetitiveItem.bind(this)
  }

  initPie() {
    const { priceLine, saleLine, feedbackLine, goodfeedback, goodtopic } = this.props;

    const saleLineData = [], saleLineName = [];
    const saleLineOption = cloneDeep(lineOption);
    for (var i = saleLine.length - 1; i >= 0; i--) {
      saleLineName.push(formatDate(saleLine[i].name, 'MM-dd'));
      saleLineData.push(saleLine[i].y);
    }
    saleLineOption.xAxis.categories = saleLineName;
    saleLineOption.series.push({
      name: '销量',
      data: saleLineData
    })
    Highcharts.chart(this.saleLineId, saleLineOption);


    const priceLineData = [], priceLineName = [];
    const priceLineOption = cloneDeep(lineOption);
    for (var i = priceLine.length - 1; i >= 0; i--) {
      priceLineName.push(formatDate(priceLine[i].name, 'MM-dd'));
      priceLineData.push(priceLine[i].y);
    }
    priceLineOption.xAxis.categories = priceLineName;
    priceLineOption.series.push({
      name: '价格',
      data: priceLineData
    })
    Highcharts.chart(this.priceLineId, priceLineOption);


    const feedbackLineData = [], feedbackLineName = [];
    const feedbackLineOption = cloneDeep(lineOption);
    for (var i = feedbackLine.length - 1; i >= 0; i--) {
      feedbackLineName.push(formatDate(feedbackLine[i].name, 'MM-dd'));
      feedbackLineData.push(feedbackLine[i].y);
    }
    feedbackLineOption.xAxis.categories = feedbackLineName;
    feedbackLineOption.series.push({
      name: '声量',
      data: feedbackLineData
    })
    Highcharts.chart(this.feedbackLineId, feedbackLineOption);

    const goodfeedbackOption = cloneDeep(pieOption);
    goodfeedbackOption.series.push({
      data: goodfeedback
    });
    Highcharts.chart(this.goodfeedbackId, goodfeedbackOption);

    const goodtopicOption = cloneDeep(pieOption);
    goodtopicOption.series.push({
      data: goodtopic
    });
    Highcharts.chart(this.goodTopicId, goodtopicOption);
  }

  componentDidMount() {
    this.initPie()
  }
    
  componentDidUpdate() {
    this.initPie()
  }

  handleClickCompetitiveItem(pid) {
    const { history } = this.props;
    history.push('/detail/product/' + pid);
  }

  render() {
    const { product={}, params, topicanls, competitivers } = this.props
    //提供4个接口参数给container做设置，可以不传参。
    return (
        <div className="product-detail">
          <Card headerTitle={product.name} headerAvatar={product.img} headerSubtitle={product.company}>
              <Table data={params.data} header={params.header} showIndex={false} height="auto"/>
          </Card>

          <Card title="产品曲线">
            <Card headerTitle="销量曲线" headerSubtitle="来自电商数据" style={cardStyle}>
                <div ref={id => this.saleLineId = id} className="barchart"></div>
            </Card>
            <Card headerTitle="价格曲线" headerSubtitle="来自电商数据" style={cardStyle}>
                <div ref={id => this.priceLineId = id} className="barchart"></div>
            </Card>
            <Card headerTitle="声量曲线" headerSubtitle="来自电商数据" style={cardStyle}>
                <div ref={id => this.feedbackLineId = id} className="barchart"></div>
            </Card>
          </Card>

          <Card title="产品声音">
            <Card headerTitle="好评率" headerSubtitle="来自电商数据" style={cardStyle}>
                <div ref={id => this.goodfeedbackId = id} className="barchart"></div>
            </Card>
            <Card headerTitle="分项好评率" headerSubtitle="来自电商数据" style={cardStyle}>
                <div ref={id => this.goodTopicId = id} className="barchart"></div>
            </Card>
            <Card headerTitle="主题分析" headerSubtitle="来自电商数据" style={cardStyle}>
                <div style={{display: 'flex',flexWrap: 'wrap'}}>
                 {
                  topicanls.map(function(t, i) {
                    return (
                      <Chip
                        style={chipStyle}
                        key={i}
                      >
                        {t.name}<span className="chipNumber">{t.y + '%'}</span>
                      </Chip>
                    )
                  })
                 }
                </div>
            </Card>
          </Card>

          <Card title="竞品">
            <Competitive competitivers={competitivers} onItemClick={this.handleClickCompetitiveItem}/>
          </Card>
        </div>
    )
  }
}
//严格来说，这些暴露给外部的参数都需要做验证,常用的验证类型为array，bool，func，number，object，string
ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
}
export default ProductDetail