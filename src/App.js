import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Route, Router } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import createHistory from 'history/createHashHistory'
const history = createHistory()

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

/*
 全局导入less
 */
import './app.less'

import * as global from 'actions/global'
import * as sidebar from 'actions/sidebar'
import asyncComponent from './AsyncComponent'

import AppBar from 'material-ui/AppBar'
import FontIcon from 'material-ui/FontIcon'

import Home from 'containers/Home/Home'
import SideBar from 'containers/SideBar/SideBar'
import ReactChildrenMap from './containers/Commons/ReactChildrenMap'
const Business = asyncComponent(() => import(/* webpackChunkName: "search" */ "./containers/Business/Business"))
const CompanyHome = asyncComponent(() => import(/* webpackChunkName: "bookList" */ "./containers/Company/CompanyHome"))
const DeTail = asyncComponent(() => import(/* webpackChunkName: "bookList" */ "./containers/DeTail/DeTail"))

@connect (
    state => {return {...state.global}},
    dispatch => bindActionCreators({...global, ...sidebar}, dispatch)
)
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleHeaderMenuClick = this.handleHeaderMenuClick.bind(this)
  }

  componentDidMount() {
      window.addEventListener('hashchange', () => {
         this.props.currentAnimate('normal')
      });
  }

  handleHeaderMenuClick() {
    const { sidebarToggle } = this.props;
    sidebarToggle();
  }
    
  render() {
      const { animateCls } = this.props;
      const that = this;
      return (
          <Router history={history}>
              <Route render={({ location }) => {
                  return(
                      <CSSTransitionGroup
                          transitionName={animateCls}
                          transitionEnter={true}
                          transitionLeave={true}
                          transitionEnterTimeout={400}
                          transitionLeaveTimeout={400}
                      >
                        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                          <div>
                            <AppBar
                              title="首页"
                              iconElementRight={<FontIcon className="muidocs-icon-action-home"></FontIcon>}
                              onLeftIconButtonTouchTap={that.handleHeaderMenuClick}
                              style={{backgroundColor: 'rgba(74, 127, 169, 1)'}}
                            />
                            <SideBar/>
                            <ReactChildrenMap key={location.pathname}>
                                <Route location={location} exact path="/" component={Home} />
                                <Route location={location} path="/home" component={Home} />
                                <Route location={location} path="/business" component={Business} />
                                <Route location={location} path="/company" component={CompanyHome} />
                                <Route location={location} path="/detail/:type/:id" component={DeTail} />
                            </ReactChildrenMap>
                          </div>
                        </MuiThemeProvider>
                      </CSSTransitionGroup>
                  )
              }}/>
          </Router>
    );
  }
}