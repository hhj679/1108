import React from 'react'
import PropTypes from 'prop-types'

import {Tabs, Tab} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import {List, ListItem} from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon'
import Avatar from 'material-ui/Avatar'

import BusinessMain from './BusinessMain'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    // padding: 10,
  }
};

const ITabs = (props) => {
  const { index, handleTabChange, icepriceLine, airpriceLine, tvpriceLine, washerpriceLine, iceCompanyMarket, tvCompanyMarket, airCompanyMarket, washerCompanyMarket } = props
  return (
    <div>
      <Tabs
        onChange={handleTabChange}
        value={index}
      >
        <Tab label="冰箱" value={0}>
        </Tab>
        <Tab label="电视" value={1}>
        </Tab>
        <Tab label="洗衣机" value={2}>
        </Tab>
        <Tab label="空调" value={3}>
        </Tab>
      </Tabs>
      <SwipeableViews
        index={index}
        onChangeIndex={handleTabChange}
      >
        <div style={styles.slide}>
          <BusinessMain type={index} priceLine={icepriceLine} companyMarket={iceCompanyMarket}/>
        </div>
        <div style={styles.slide}>
          <BusinessMain type={index} priceLine={tvpriceLine} companyMarket={tvCompanyMarket}/>
        </div>
        <div style={styles.slide}>
          <BusinessMain type={index} priceLine={washerpriceLine} companyMarket={washerCompanyMarket}/>
        </div>
        <div style={styles.slide}>
          <BusinessMain type={index} priceLine={airpriceLine} companyMarket={airCompanyMarket}/>
        </div>
      </SwipeableViews>
    </div>
  )
}
ITabs.propTypes = {
    tabIndex: PropTypes.number,
    handleTabChange: PropTypes.func
}
export default ITabs