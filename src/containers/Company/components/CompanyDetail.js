import React from 'react'
import PropTypes from 'prop-types'

import Avatar from 'material-ui/Avatar'
import Card from '../../Commons/Card'

import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'

import '../styles/company.less'

class CompanyDetail extends React.Component {
    constructor(props) {
        super(props)
        this.initPie = this.initPie.bind(this)
    }

    initPie() {
        const barOption = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [{
              type : 'category',
              data : [],
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                interval: 0,
                rotate: 40,
                formatter:function(value) {
                    // return value.split("").join("\n");
                    return value.substring(0, 4) + '...';
                }
              },
              nameTextStyle: {
                fontSize: '.1rem'
              }
            }],
            yAxis : [{
              type : 'value'
            }],
            series : [{
              name:'',
              type:'bar',
              barWidth: '60%',
              label: {
                normal: {
                    show: true,
                    position: 'top'
                }
              },
              data:[]
            }]
        }

        const lineOption = {
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['2010','2011','2012','2015','2016','2017']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'申请量',
              type:'line',
              stack: '总量',
              data:[120, 101, 134, 90, 230, 210]
            }
          ]
        }

        const saleOption = barOption;
        saleOption.xAxis[0].data=['美的KF66/200L-MI(E4)', 
            '美的 RSJ-15/190RDN3-C ', 
            '美的 KF66/150L-MI(E4)', 
            '美的 RSJ-20/100RD', 
            '美的 BCD-439WTPM(E)', 
            '美的 BCD-215WTM(E)', 
            '美的 BCD-271VMQ', 
            '美的 BCD-258WTPZM(E)', 
            '美的 BCD-228WTPZM(E)', 
            '美的 BCD-450WKZM(E)'
        ];
        saleOption.series[0].name='销量';
        saleOption.series[0].data=[1200, 1000, 900, 856, 824, 810, 800, 635, 621, 500];
        let saleChart = echarts.init(this.saleTopId) //初始化echarts
        saleChart.setOption(saleOption);


        const goodOption = barOption;
        goodOption.xAxis[0].data=['美的KF66/200L-MI(E4)', 
            '美的 RSJ-15/190RDN3-C ', 
            '美的 KF66/150L-MI(E4)', 
            '美的 RSJ-20/100RD', 
            '美的 BCD-439WTPM(E)', 
            '美的 BCD-215WTM(E)', 
            '美的 BCD-271VMQ', 
            '美的 BCD-258WTPZM(E)', 
            '美的 BCD-228WTPZM(E)', 
            '美的 BCD-450WKZM(E)'
        ];
        goodOption.series[0].name='好评量';
        goodOption.series[0].data=[1200, 1000, 900, 856, 824, 810, 800, 635, 621, 500];
        let goodChart = echarts.init(this.goodTopId) //初始化echarts
        goodChart.setOption(goodOption);


        const badOption = barOption;
        badOption.xAxis[0].data=['美的KF66/200L-MI(E4)', 
            '美的 RSJ-15/190RDN3-C ', 
            '美的 KF66/150L-MI(E4)', 
            '美的 RSJ-20/100RD', 
            '美的 BCD-439WTPM(E)', 
            '美的 BCD-215WTM(E)', 
            '美的 BCD-271VMQ', 
            '美的 BCD-258WTPZM(E)', 
            '美的 BCD-228WTPZM(E)', 
            '美的 BCD-450WKZM(E)'
        ];
        badOption.series[0].name='差评量';
        badOption.series[0].data=[1200, 1000, 900, 856, 824, 810, 800, 635, 621, 500];
        let badChart = echarts.init(this.badTopId) //初始化echarts
        badChart.setOption(badOption);



        let patenYearOption = lineOption;
        let patenYearChart = echarts.init(this.patenYearId);
        patenYearChart.setOption(patenYearOption);

        const patenPersonOption = barOption;
        patenPersonOption.xAxis[0].data=['小A', 
            '小B', 
            '小C', 
            '小D', 
            '小E', 
            '小F', 
            '小G', 
            '小H', 
            '小I', 
            '小J'
        ];
        patenPersonOption.series[0].name='专利申请量';
        patenPersonOption.series[0].data=[100, 86, 75, 70, 68, 63, 58, 55, 50, 40];
        let patenPersonChart = echarts.init(this.patenPersonId) //初始化echarts
        patenPersonChart.setOption(patenPersonOption);


        const patenCategoryOption = barOption;
        patenCategoryOption.xAxis[0].data=['小A', 
            '小B', 
            '小C', 
            '小D', 
            '小E', 
            '小F', 
            '小G', 
            '小H', 
            '小I', 
            '小J'
        ];
        patenCategoryOption.series[0].name='专利分类';
        patenCategoryOption.series[0].data=[100, 86, 75, 70, 68, 63, 58, 55, 50, 40];
        let patenCategoryChart = echarts.init(this.patenCategoryId) //初始化echarts
        patenCategoryChart.setOption(patenCategoryOption);


        window.onresize = function() {
          saleChart.resize();
          goodChart.resize();
          badChart.resize();
          patenYearChart.resize();
          patenPersonChart.resize();
          patenCategoryChart.resize();
        }
    }

    componentDidMount() {
        this.initPie()
    }
      
    componentDidUpdate() {
        this.initPie()
    }

    render() {
        const { company={} } = this.props;
        //提供4个接口参数给container做设置，可以不传参。
        return (
            <div className="company-detail">
                <Card headerTitle={company.name} headerAvatar={company.logo} headerSubtitle={company.en}>
                    <div className="description">{company.description}</div>
                    <div className="footer">
                        <span className="text">{company.full}</span>
                        <span className="text">成立于：{company.foundDate}</span>
                    </div>
                </Card>

                <Card title="产品">
                    <Card headerTitle="TOP 10销量的产品" headerSubtitle="来自电商数据" style={{height: '10rem'}}>
                        <div ref={id => this.saleTopId = id} className="barchart"></div>
                    </Card>
                    <Card headerTitle="TOP 10好评的产品" headerSubtitle="来自电商数据" style={{height: '10rem'}}>
                        <div ref={id => this.goodTopId = id} className="barchart"></div>
                    </Card>
                    <Card headerTitle="TOP 10差评的产品" headerSubtitle="来自电商数据" style={{height: '10rem'}}>
                        <div ref={id => this.badTopId = id} className="barchart"></div>
                    </Card>
                </Card>

                <Card title="专利">
                    <Card headerTitle="近年专利申请量" headerSubtitle="来自电商数据" style={{height: '10rem'}}>
                        <div ref={id => this.patenYearId = id} className="barchart"></div>
                    </Card>
                    <Card headerTitle="TOP 10专利申请人" headerSubtitle="来自电商数据" style={{height: '10rem'}}>
                        <div ref={id => this.patenPersonId = id} className="barchart"></div>
                    </Card>
                    <Card headerTitle="专利分类" headerSubtitle="来自电商数据" style={{height: '10rem'}}>
                        <div ref={id => this.patenCategoryId = id} className="barchart"></div>
                    </Card>
                </Card>
            </div>
        )
    }
}
//严格来说，这些暴露给外部的参数都需要做验证,常用的验证类型为array，bool，func，number，object，string
CompanyDetail.propTypes = {
    company: PropTypes.object.isRequired
}
export default CompanyDetail