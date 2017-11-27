/**
 * Created by Administrator on 2016/7/2.
 */
import React from 'react'
import PropTypes from 'prop-types'

import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'

const IAvatar = (props) => {
    const { user } = props
    return (
        <ListItem
          style={{fontSize: '1.3rem', color: 'white'}}
          hoverColor="none"
          leftAvatar={
            <Avatar src={user.avatar} />
          }
        >
          {user.name}
        </ListItem>
    )
}
IAvatar.propTypes = {
    user: PropTypes.object.isRequired
}
export default IAvatar