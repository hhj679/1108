/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//关于import什么时候用{}，什么时候不用大括号，通过那个插件或者组件是否包含default来判断，如果包含，则不需要{}

import FontIcon from 'material-ui/FontIcon'

/*actions*/
import * as software from 'actions/software'
import * as global from 'actions/global'
// import * as sidebar from 'actions/sidebar'

import { lineOption, barOption } from '../../utils/highchartUtils'

import cloneDeep from 'lodash/cloneDeep'

// import Tabs from './components/Tabs'
import Card from '../Commons/Card'

import Highcharts from 'highcharts'

// import './styles/business.less'

/**
 * connect中间件
 * connect一定要写在需要传递参数的组件头部，因为这是语法规则，只对当前关联的组件生效，和java的原理是一致的
 * state用法：state => state（传递全部state）， {return {...state.home, ...state.global}}（n个state）
 * dispatch用法：（单个action）bindActionCreators(navActions, dispatch)，（多个action）bindActionCreators({...action1, ...action2}, dispatch)
 */

 const cardStyle = {
    height: '16rem',
     margin: '0'
 }

@connect(
    state => ({...state.software}),
    dispatch => bindActionCreators({...software, ...global}, dispatch)
)
export default class Software extends React.Component {

    constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
        this.initChart = this.initChart.bind(this)
    }

    componentWillMount() {
        // const { navMain, bookDetails } = this.props
        // if (navMain.length === 0) {
        //     this.props.getNav();
        // }

        // if (bookDetails.length === 0) {
        //     this.props.getBook()
        // }
    }

    initChart() {
        const { top10Project, top10Talent, top10Company } = this.props

        const topProjectOption = cloneDeep(barOption);
        topProjectOption.series[0].name = 'Star数';
        topProjectOption.series[0].data= top10Project
        Highcharts.chart(this.topProjectId, topProjectOption);

        const topTalentOption = cloneDeep(barOption);
        topTalentOption.series[0].name = 'Commit数';
        topTalentOption.series[0].data= top10Talent
        Highcharts.chart(this.topTalentId, topTalentOption);

        const topCompanyOption = cloneDeep(barOption);
        topCompanyOption.series[0].name = 'Commitor数';
        topCompanyOption.series[0].data= top10Company
        Highcharts.chart(this.topCompanyId, topCompanyOption);
    }

    componentDidMount() {
        this.initChart()
    }
        
    componentDidUpdate() {
        this.initChart()
    }

    render() {
        const { tabIndex, swipeTabs } = this.props
        //还可以通过自定义样式传递给组件
        return(
            <div className="business-main main-body">
                <Card title="IOT TOP 10项目" subtitle="数据来自开源社区">
                    <div ref={id => this.topProjectId = id} style={cardStyle}></div>
                </Card>
                <Card title="IOT TOP 10人才" subtitle="数据来自开源社区">
                    <div ref={id => this.topTalentId = id} style={cardStyle}></div>
                </Card>
                <Card title="IOT TOP 10厂商" subtitle="数据来自开源社区">
                    <div ref={id => this.topCompanyId = id} style={cardStyle}></div>
                </Card>
            </div>
        )
    }
}
Software.propTypes = {

}