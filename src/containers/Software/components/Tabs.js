import React from 'react'
import PropTypes from 'prop-types'

import {Tabs, Tab} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
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
        <Tab label="项目" value={0}>
        </Tab>
        <Tab label="厂商" value={1}>
        </Tab>
        <Tab label="人才" value={2}>
        </Tab>
      </Tabs>
      <SwipeableViews
        index={index}
        onChangeIndex={handleTabChange}
      >
        <div>
          <List>
            <ListItem
              primaryText="Chelsea 项目"
              leftAvatar={<Avatar icon={<FontIcon className="material-icons">tv</FontIcon>}  />}
            />
            <ListItem
              primaryText="James 项目"
              leftAvatar={<Avatar icon={<FontIcon className="material-icons">important_devices</FontIcon>} />}
            />
          </List>
        </div>
        <div style={styles.slide}>
          <List>
            <ListItem
              primaryText="Chelsea 厂商"
              leftAvatar={<Avatar icon={<FontIcon className="material-icons">tv</FontIcon>}  />}
            />
            <ListItem
              primaryText="James 厂商"
              leftAvatar={<Avatar icon={<FontIcon className="material-icons">important_devices</FontIcon>} />}
            />
          </List>
        </div>
        <div style={styles.slide}>
          <List>
            <ListItem
              primaryText="Chelsea 人才"
              leftAvatar={<Avatar icon={<FontIcon className="material-icons">tv</FontIcon>}  />}
            />
            <ListItem
              primaryText="James 人才"
              leftAvatar={<Avatar icon={<FontIcon className="material-icons">important_devices</FontIcon>} />}
            />
          </List>
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