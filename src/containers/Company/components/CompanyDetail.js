import React from 'react'
import PropTypes from 'prop-types'

import Avatar from 'material-ui/Avatar'
import Card from '../../Commons/Card'
import Table from '../../Commons/Table'

import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'

import Highcharts from 'highcharts'

import '../styles/company.less'

class CompanyDetail extends React.Component {
    constructor(props) {
        super(props)
        this.initPie = this.initPie.bind(this)
    }

    initPie() {
        const barOption = {
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

        const lineOption = {
            title: {
                text: ''
            },
            credits: { 
                enabled:false 
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    // pointStart: 2010
                }
            },
            series: []
        }


        const saleOption = Object.assign(barOption);
        saleOption.series[0].name = '销量';
        saleOption.series[0].data=[{
            name: '美的KF66/200L-MI(E4)',
            y: 967
        }, {
            name: '美的 RSJ-15/190RDN3-C',
            y: 905
        },{
            name: '美的 KF66/150L-MI(E4)',
            y: 900
        },{
            name: '美的 RSJ-20/100RD',
            y: 865
        },{
            name: '美的 BCD-439WTPM(E)',
            y: 825
        },{
            name: '美的 BCD-215WTM(E)',
            y: 810
        },{
            name: '美的 BCD-271VMQ',
            y: 800
        },{
            name: '美的 BCD-258WTPZM(E)',
            y: 621
        },{
            name: '美的 BCD-228WTPZM(E)',
            y: 589
        },{
            name: '美的 BCD-450WKZM(E)',
            y: 456
        }]
        Highcharts.chart(this.saleTopId, saleOption);


        const goodOption = Object.assign(barOption);
        goodOption.series[0].name = '好评量';
        goodOption.series[0].data=[{
            name: '美的KF66/200L-MI(E4)',
            y: 1200
        }, {
            name: '美的 RSJ-15/190RDN3-C',
            y: 1000
        },{
            name: '美的 KF66/150L-MI(E4)',
            y: 900
        },{
            name: '美的 RSJ-20/100RD',
            y: 865
        },{
            name: '美的 BCD-439WTPM(E)',
            y: 825
        },{
            name: '美的 BCD-215WTM(E)',
            y: 810
        },{
            name: '美的 BCD-271VMQ',
            y: 800
        },{
            name: '美的 BCD-258WTPZM(E)',
            y: 621
        },{
            name: '美的 BCD-228WTPZM(E)',
            y: 589
        },{
            name: '美的 BCD-450WKZM(E)',
            y: 456
        }]
        Highcharts.chart(this.goodTopId, goodOption);


        const badOption = Object.assign(barOption);
        badOption.series[0].name = '差评量';
        badOption.series[0].data=[{
            name: '美的KF66/200L-MI(E4)',
            y: 1200
        }, {
            name: '美的 RSJ-15/190RDN3-C',
            y: 1000
        },{
            name: '美的 KF66/150L-MI(E4)',
            y: 900
        },{
            name: '美的 RSJ-20/100RD',
            y: 865
        },{
            name: '美的 BCD-439WTPM(E)',
            y: 825
        },{
            name: '美的 BCD-215WTM(E)',
            y: 810
        },{
            name: '美的 BCD-271VMQ',
            y: 800
        },{
            name: '美的 BCD-258WTPZM(E)',
            y: 621
        },{
            name: '美的 BCD-228WTPZM(E)',
            y: 589
        },{
            name: '美的 BCD-450WKZM(E)',
            y: 456
        }]
        Highcharts.chart(this.badTopId, badOption);


        const patenYearOption = Object.assign(lineOption);
        patenYearOption.series.push({
            name: '申请量',
            data: [120, 101, 134, 90, 230, 210]
        });
        patenYearOption.plotOptions.series.pointStart = 2012;
        Highcharts.chart(this.patenYearId, patenYearOption);

        const patenPersonOption = Object.assign(barOption);
        patenPersonOption.series[0].name = '专利申请量';
        patenPersonOption.series[0].data=[{
            name: '小A',
            y: 100
        }, {
            name: '小B',
            y: 86
        },{
            name: '小C',
            y: 75
        },{
            name: '小D',
            y: 70
        },{
            name: '小E',
            y: 68
        },{
            name: '小F',
            y: 63
        },{
            name: '小G',
            y: 58
        },{
            name: '小H',
            y: 55
        },{
            name: '小I',
            y: 50
        },{
            name: '小J',
            y: 43
        }]
        Highcharts.chart(this.patenPersonId, patenPersonOption);


        const patenCategoryOption = Object.assign(barOption);
        patenCategoryOption.series[0].name = '专利分类';
        patenCategoryOption.series[0].data=[{
            name: '分类A',
            y: 78
        }, {
            name: '分类B',
            y: 70
        },{
            name: '分类C',
            y: 68
        },{
            name: '分类D',
            y: 52
        },{
            name: '分类E',
            y: 50
        },{
            name: '分类F',
            y: 45
        },{
            name: '分类G',
            y: 43
        },{
            name: '分类H',
            y: 30
        },{
            name: '分类I',
            y: 28
        },{
            name: '分类J',
            y: 22
        }]
        Highcharts.chart(this.patenCategoryId, patenCategoryOption);

        const pojectYearOption = Object.assign(lineOption);
        pojectYearOption.series.push({
            name: '项目数',
            data: [120, 101, 134, 90, 230, 210]
        });
        pojectYearOption.plotOptions.series.pointStart = 2012;
        Highcharts.chart(this.projectLineId, pojectYearOption);

        const commitorYearOption = Object.assign(lineOption);
        commitorYearOption.series.push({
            name: '提交量',
            data: [120, 101, 134, 90, 230, 210, 300, 318]
        });
        commitorYearOption.plotOptions.series.pointStart = 2010;
        Highcharts.chart(this.commiteLineId, commitorYearOption);
    }

    componentDidMount() {
        this.initPie()
    }
      
    componentDidUpdate() {
        this.initPie()
    }

    render() {
        const { company={} } = this.props;
        const cardStyle = {
            height: '16rem',
            margin: '0'
            // borderStyle: 'groove none'
        }
        const tableCartStyle= {
            margin: '0 0 2rem 0',
            // borderStyle: 'groove none'
        }

        const projectHeader=["序号", "项目", "人数"];
        const projectData = {
            columns: ["project", "commitors"],
            data: [{
                project: 'project a',
                commitors: '123'
            }, {
                project: 'project b',
                commitors: '100'
            }, {
                project: 'project c',
                commitors: '68'
            }, {
                project: 'project d',
                commitors: '47'
            }, {
                project: 'project e',
                commitors: '41'
            }, {
                project: 'project f',
                commitors: '21'
            }]
        }

        const commitorHeader=["序号", "投入人", "提交数"];
        const commitorData = {
            columns: ["commitor", "commites"],
            data: [{
                commitor: 'commitor a',
                commites: '123'
            }, {
                commitor: 'commitor b',
                commites: '100'
            }, {
                commitor: 'commitor c',
                commites: '68'
            }, {
                commitor: 'commitor d',
                commites: '47'
            }, {
                commitor: 'commitor e',
                commites: '41'
            }]
        }

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
                    <Card headerTitle="TOP 10销量的产品" headerSubtitle="来自电商数据" style={cardStyle}>
                        <div ref={id => this.saleTopId = id} className="barchart"></div>
                    </Card>
                    <Card headerTitle="TOP 10好评的产品" headerSubtitle="来自电商数据" style={cardStyle}>
                        <div ref={id => this.goodTopId = id} className="barchart"></div>
                    </Card>
                    <Card headerTitle="TOP 10差评的产品" headerSubtitle="来自电商数据" style={cardStyle}>
                        <div ref={id => this.badTopId = id} className="barchart"></div>
                    </Card>
                </Card>

                <Card title="专利">
                    <Card headerTitle="近年专利申请量" headerSubtitle="来自电商数据" style={cardStyle}>
                        <div ref={id => this.patenYearId = id} className="barchart"></div>
                    </Card>
                    <Card headerTitle="TOP 10专利申请人" headerSubtitle="来自电商数据" style={cardStyle}>
                        <div ref={id => this.patenPersonId = id} className="barchart"></div>
                    </Card>
                    <Card headerTitle="专利分类" headerSubtitle="来自电商数据" style={cardStyle}>
                        <div ref={id => this.patenCategoryId = id} className="barchart"></div>
                    </Card>
                </Card>

                <Card title="软件技术">
                    <Card headerTitle="项目" headerSubtitle="来自开源网站数据" style={tableCartStyle}>
                        <Table data={projectData} header={projectHeader} height="auto"/>
                    </Card>
                    <Card headerTitle="每年投入项目" headerSubtitle="来自开源网站数据" style={cardStyle}>
                        <div ref={id => this.projectLineId = id} className="barchart"></div>
                    </Card>
                    <Card headerTitle="软件技术人才" headerSubtitle="来自开源网站数据" style={tableCartStyle}>
                         <Table data={commitorData} header={commitorHeader} height="auto"/>
                    </Card>
                    <Card headerTitle="每年项目提交数" headerSubtitle="来自开源网站数据" style={cardStyle}>
                        <div ref={id => this.commiteLineId = id} className="barchart"></div>
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