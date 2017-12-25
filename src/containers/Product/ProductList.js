/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'

//关于import什么时候用{}，什么时候不用大括号，通过那个插件或者组件是否包含default来判断，如果包含，则不需要{}

import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import FontIcon from 'material-ui/FontIcon'

/*actions*/
import * as product from 'actions/product'
import * as global from 'actions/global'
// import * as sidebar from 'actions/sidebar'

import './styles/product.less'

/**
 * connect中间件
 * connect一定要写在需要传递参数的组件头部，因为这是语法规则，只对当前关联的组件生效，和java的原理是一致的
 * state用法：state => state（传递全部state）， {return {...state.home, ...state.global}}（n个state）
 * dispatch用法：（单个action）bindActionCreators(navActions, dispatch)，（多个action）bindActionCreators({...action1, ...action2}, dispatch)
 */

 const listStyle = {
    margin: '.5rem 0'
 }
 const tileStyle = {
    // margin: '1rem .2rem'
 }

@connect(
    state => ({...state.product}),
    dispatch => bindActionCreators({...product, ...global}, dispatch)
)
export default class ProductList extends React.Component {

    constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    componentWillMount() {
    }

    handleItemClick(pid) {
        this.props.history.push('/detail/product/' + pid)
    }

    render() {
        const { products=[] } = this.props;
        const that = this;

        //还可以通过自定义样式传递给组件
        return(
            <GridList
              cellHeight={180}
              style={listStyle}
              cols={2}
              padding={8}
            >
                {
                    products.map(function(p, i) {
                        return(
                            <GridTile
                              key={p.id}
                              title={p.name}
                              subtitle={<span>by <b>{p.company}</b></span>}
                              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                              style={tileStyle}
                              onClick={that.handleItemClick.bind(that, p.id)}
                            >
                              <img src={p.img} />
                            </GridTile>
                        )
                    })
                }
            </GridList>
        )
    }
}
ProductList.propTypes = {

}