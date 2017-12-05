import React from 'react'
import PropTypes from 'prop-types'

import {Tabs, Tab} from 'material-ui/Tabs'
// import SwipeableViews from 'react-swipeable-views'
import {List, ListItem} from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon'
import Avatar from 'material-ui/Avatar'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  }
};

const ITabs = (props) => {
  const { index, handleTabChange } = props
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
      
    </div>
  )
}
ITabs.propTypes = {
    tabIndex: PropTypes.number,
    handleTabChange: PropTypes.func
}
export default ITabs