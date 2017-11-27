import React from 'react'
import PropTypes from 'prop-types'

import {Tabs, Tab} from 'material-ui/Tabs'
import {List, ListItem} from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon'
import Avatar from 'material-ui/Avatar'

const ITabs = (props) => {
    const { tabs } = props
    return (
      <div>
        <Tabs
        >
          <Tab label="冰箱" value={0}>
            <List>
              <ListItem
                primaryText="Chelsea 冰箱"
                leftAvatar={<Avatar icon={<FontIcon className="material-icons">tv</FontIcon>}  />}
              />
              <ListItem
                primaryText="James 冰箱"
                leftAvatar={<Avatar icon={<FontIcon className="material-icons">important_devices</FontIcon>} />}
              />
            </List>
          </Tab>
          <Tab label="电视" value={1}>
            <List>
              <ListItem
                primaryText="Chelsea 电视"
                leftAvatar={<Avatar icon={<FontIcon className="material-icons">tv</FontIcon>}  />}
              />
              <ListItem
                primaryText="James 电视"
                leftAvatar={<Avatar icon={<FontIcon className="material-icons">important_devices</FontIcon>} />}
              />
            </List>
          </Tab>
          <Tab label="洗衣机" value={2}>
            <List>
              <ListItem
                primaryText="Chelsea 洗衣机"
                leftAvatar={<Avatar icon={<FontIcon className="material-icons">tv</FontIcon>}  />}
              />
              <ListItem
                primaryText="James 洗衣机"
                leftAvatar={<Avatar icon={<FontIcon className="material-icons">important_devices</FontIcon>} />}
              />
            </List>
          </Tab>
          <Tab label="空调" value={3}>
            <List>
              <ListItem
                primaryText="Chelsea 空调"
                leftAvatar={<Avatar icon={<FontIcon className="material-icons">tv</FontIcon>}  />}
              />
              <ListItem
                primaryText="James 空调"
                leftAvatar={<Avatar icon={<FontIcon className="material-icons">important_devices</FontIcon>} />}
              />
            </List>
          </Tab>
        </Tabs>
      </div>
    )
}
ITabs.propTypes = {
    tabs: PropTypes.array
}
export default ITabs