/**
 * Created by Administrator on 2016/7/2.
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/*actions*/
import * as sidebar from 'actions/sidebar'

import Avatar from './components/Avatar'
// import Menu from './components/Menu'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'

import './styles/sidebar.less'

const menuItemStyle = {
    fontFamily: 'Roboto, sans-serif',
    fontAize: '1.4rem',
    color: 'white',
    lineHeight: '4.3rem'
}


@connect(
    state => ({...state.sidebar}),
    dispatch => bindActionCreators({...sidebar}, dispatch)
)
export default class SideBar extends React.Component {
    constructor(props) {
        super(props)
        // this.hotClick = this.hotClick.bind(this)
        // this.upDateValue = this.upDateValue.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    componentWillMount() {
        // console.log('进入搜索页面')
        // this.props.receiveHotSearch()
    }
    handleItemClick(key) {
        const { sidebarToggle } = this.props;

        window.location.hash = "#/" + key;
        
        // if(index == 0) {
        //     window.location.hash='#/'
        // } else if(index == 1) {
        //     window.location.hash='#/business'
        // }
        sidebarToggle(false)
    }
    // upDateValue(value) {
    //     this.setState({currentHot: value})
    // }
    // hotClick(text) {
    //     this.setState(() => { return {currentHot: text} })
    // }
    render() {
        const { open, user, menus, sidebarToggle } = this.props;
        const that = this;
        return (
            <Drawer
              docked={false}
              width={'70%'}
              open={open}
              containerStyle={{backgroundColor:'rgba(74, 127, 169, 1)', overflowX:'hidden'}}
              onRequestChange={(open) => sidebarToggle(open)}
              zDepth={5}
              className="sidebar"
            >
                <div className="avatar-ontainer">
                    <Avatar user={user}/>
                </div>
                {/*<Menu menus={menus} handleItemClick={this.handleItemClick}/> */}
                {
                  menus.map(function(elem, index) {
                    return(
                        <MenuItem 
                            primaryText={elem.text} 
                            onClick={that.handleItemClick.bind(that, elem.key)} 
                            leftIcon={<FontIcon className="material-icons menu-icon">{elem.id}</FontIcon>} 
                            key={elem.key}
                            innerDivStyle={menuItemStyle}
                        />
                    )
                  })
                }
            </Drawer>
        )
    }
}
SideBar.propTypes = {
    open: PropTypes.bool,
    user: PropTypes.object,
    menus: PropTypes.array,
    sidebarToggle: PropTypes.func
}
