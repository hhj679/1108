/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//关于import什么时候用{}，什么时候不用大括号，通过那个插件或者组件是否包含default来判断，如果包含，则不需要{}

import cloneDeep from 'lodash/cloneDeep'

/*actions*/
import * as home from 'actions/home'
import * as global from 'actions/global'
// import * as sidebar from 'actions/sidebar'

import ChinaMap from '../Commons/ChinaMap'

/*component*/
// import Header from './components/Header'
// import Nav from './components/Nav'
// import Special from './components/Special'
// import BookList from './components/BookList'

import AppBar from 'material-ui/AppBar'
import FontIcon from 'material-ui/FontIcon'
import {blue500} from 'material-ui/styles/colors'

import { lineOption, barOption, pieOption } from '../../utils/highchartUtils'
import { formatDate } from '../../utils/dateUtils'

// import SideBar from 'containers/SideBar/SideBar'
import Card from '../Commons/Card'
import Highcharts from 'highcharts'

import './styles/home.less'

/**
 * connect中间件
 * connect一定要写在需要传递参数的组件头部，因为这是语法规则，只对当前关联的组件生效，和java的原理是一致的
 * state用法：state => state（传递全部state）， {return {...state.home, ...state.global}}（n个state）
 * dispatch用法：（单个action）bindActionCreators(navActions, dispatch)，（多个action）bindActionCreators({...action1, ...action2}, dispatch)
 */

@connect(
    state => ({...state.home}),
    dispatch => bindActionCreators({...home, ...global}, dispatch)
)
export default class Home extends React.Component {

    constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
        this.initChart = this.initChart.bind(this)
    }

    initChart() {
        const { priceLine } = this.props

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
    }

    componentDidMount() {
        this.initChart()
    }
        
    componentDidUpdate() {
        this.initChart()
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

    // handleLeftIconClick() {
    //     //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
    //     // this.props.history.push('/')
    //     const { sidebarToggle } = this.props;
    //     sidebarToggle();
    // }

    render() {
        // const { navMain, bookDetails } = this.props
        //还可以通过自定义样式传递给组件
        let bgClass = { background: '#00bb9c' } //定义一个背景色的变量
        return(
            <div className="home-main main-body">
                <div className="home-content">
                    <Card title="市场容量" subtitle="各厂商产品近半年市场容量"><ChinaMap/></Card>
                    <Card title="产品价格" subtitle="产品今年价格变化曲线">
                        <div ref={id => this.priceLineId = id} className="barchart"></div>
                    </Card>
                    <Card title="专利分布"><ChinaMap/></Card>
                </div>
            </div>
        )
    }
}
Home.propTypes = {

}