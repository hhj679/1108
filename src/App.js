import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Route, Router } from 'react-router-dom'
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
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
import { auth } from 'actions/login'
import asyncComponent from './AsyncComponent'

import AppBar from 'material-ui/AppBar'
import FontIcon from 'material-ui/FontIcon'

import { readData } from './utils/cookie'

import Home from 'containers/Home/Home'
import SideBar from 'containers/SideBar/SideBar'
import ReactChildrenMap from './containers/Commons/ReactChildrenMap'
const Business = asyncComponent(() => import(/* webpackChunkName: "business" */ "./containers/Business/Business"))
const CompanyHome = asyncComponent(() => import(/* webpackChunkName: "company" */ "./containers/Company/CompanyHome"))
const DeTail = asyncComponent(() => import(/* webpackChunkName: "deTail" */ "./containers/DeTail/DeTail"))
const ProductCategory = asyncComponent(() => import(/* webpackChunkName: "product" */ "./containers/Product/ProductCategory"))
const ProductList = asyncComponent(() => import(/* webpackChunkName: "product" */ "./containers/Product/ProductList"))
const Software = asyncComponent(() => import(/* webpackChunkName: "software" */ "./containers/Software/Software"))
const Patent = asyncComponent(() => import(/* webpackChunkName: "paten" */ "./containers/Patent/Patent"))
const Login = asyncComponent(() => import(/* webpackChunkName: "login" */ "./containers/Login/Login"))

@connect (
    state => {return {...state.global, ...state.login}},
    dispatch => bindActionCreators({...global, ...sidebar}, dispatch)
)
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleHeaderMenuClick = this.handleHeaderMenuClick.bind(this)
  }

  componentWillMount() {
    if(!auth() && !location.hash.startsWith('#/login')){
      let hash = location.hash;
      if(hash.startsWith('#')){
        hash = hash.substr(1);
      }
      history.push('/login/' + encodeURIComponent(hash))
    }
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
                  //check login here
                  // console.log(location)
                  // if(!auth() || location.pathname =='/login') {
                  //   if(!location.pathname.startsWith('/login')){
                  //     history.push('/login?redirect=' + (location.pathname=='/'?'/home':location.pathname))
                  //   }
                  //   return(
                  //     <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)} >
                  //       <Login/>
                  //     </MuiThemeProvider>
                  //   )
                  // }
                  let head = null;
                  if(readData('token') !== null) {
                    head = (
                      <div>
                        <AppBar
                          title="首页"
                          iconElementRight={<FontIcon className="muidocs-icon-action-home"></FontIcon>}
                          onLeftIconButtonClick={that.handleHeaderMenuClick}
                          style={{backgroundColor: 'rgba(74, 127, 169, 1)'}}
                        />
                        <SideBar/>
                      </div>
                    )
                  }
                  
                  return(
                        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)} >
                          <div className="root-main">
                            {head}
                            <ReactChildrenMap key={location.pathname}>
                                <Route location={location} exact path="/" component={Home}/>
                                <Route location={location} path="/home" component={Home}/>
                                <Route location={location} path="/business" component={Business}/>
                                <Route location={location} path="/company" component={CompanyHome}/>
                                <Route location={location} path="/detail/:type/:id" component={DeTail}/>
                                <Route location={location} path="/product" component={ProductCategory}/>
                                <Route location={location} path="/productlist/:category" component={ProductList}/>
                                <Route location={location} path="/software" component={Software}/>
                                <Route location={location} path="/patent" component={Patent}/>
                                <Route location={location} path="/login" component={Login}/>
                            </ReactChildrenMap>
                          </div>
                        </MuiThemeProvider>
                  )
              }}/>
          </Router>
    );
  }
}