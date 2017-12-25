/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//关于import什么时候用{}，什么时候不用大括号，通过那个插件或者组件是否包含default来判断，如果包含，则不需要{}

/*actions*/
import * as patent from 'actions/patent'
import * as global from 'actions/global'

// import Tabs from './components/Tabs'
import Card from '../Commons/Card'
import Table from '../Commons/Table'

import ChinaMap from '../Commons/ChinaMap'

import './styles/patent.less'

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
    state => ({...state.patent}),
    dispatch => bindActionCreators({...patent, ...global}, dispatch)
)
export default class Patent extends React.Component {

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

    }

    componentDidMount() {
        this.initChart()
    }
        
    componentDidUpdate() {
        this.initChart()
    }

    render() {
        const { tabIndex, swipeTabs } = this.props

        const patentPeopleHeader=["序号", "申请人", "专利数"];
        const patentPeopleData = {
            columns: ["people", "patents"],
            data: [{
                people: 'people a',
                patents: '123'
            }, {
                people: 'people b',
                patents: '100'
            }, {
                people: 'people c',
                patents: '68'
            }, {
                people: 'people d',
                patents: '47'
            }, {
                people: 'people e',
                patents: '41'
            }]
        }
        //还可以通过自定义样式传递给组件
        return(
            <div className="patent-main main-body">
                <Card title="专利分布">
                    <ChinaMap/>
                </Card>
                <Card title="专利人才">
                    <Table data={patentPeopleData} header={patentPeopleHeader} height="auto"/>
                </Card>
            </div>
        )
    }
}
Patent.propTypes = {

}