/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//关于import什么时候用{}，什么时候不用大括号，通过那个插件或者组件是否包含default来判断，如果包含，则不需要{}

import AppBar from 'material-ui/AppBar'
import FontIcon from 'material-ui/FontIcon'
import {blue500} from 'material-ui/styles/colors'
import SideBar from 'containers/SideBar/SideBar'
/*actions*/
import * as business from 'actions/business'
import * as global from 'actions/global'
import * as sidebar from 'actions/sidebar'

import Card from '../Home/components/Card'
import Tabs from './components/Tabs'

import './styles/business.less'

/**
 * connect中间件
 * connect一定要写在需要传递参数的组件头部，因为这是语法规则，只对当前关联的组件生效，和java的原理是一致的
 * state用法：state => state（传递全部state）， {return {...state.home, ...state.global}}（n个state）
 * dispatch用法：（单个action）bindActionCreators(navActions, dispatch)，（多个action）bindActionCreators({...action1, ...action2}, dispatch)
 */

@connect(
    state => ({...state.business}),
    dispatch => bindActionCreators({...business, ...global, ...sidebar}, dispatch)
)
export default class Business extends React.Component {

    constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
        this.handleLeftIconClick = this.handleLeftIconClick.bind(this)
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

    handleLeftIconClick() {
        //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
        // this.props.history.push('/')
        const { sidebarToggle } = this.props;
        sidebarToggle();
    }

    render() {
        // const { navMain, bookDetails } = this.props
        //还可以通过自定义样式传递给组件
        return(
            <div className="business-main">
                <AppBar
                    title="首页"
                    iconElementRight={<FontIcon className="muidocs-icon-action-home"></FontIcon>}
                    onLeftIconButtonTouchTap={this.handleLeftIconClick}
                    style={{backgroundColor: 'rgba(74, 127, 169, 1)'}}
                />
                <SideBar/>
                <Tabs/>
            </div>
        )
    }
}
Business.propTypes = {

}