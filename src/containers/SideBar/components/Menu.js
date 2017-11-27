import React from 'react'
import PropTypes from 'prop-types'

import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'

const IMenu = (props) => {
    const { menus, handleItemClick } = props
    return (
      <Menu menuItemStyle={{fontSize: '1.4rem', color: 'white', lineHeight: '4.3rem'}} onItemTouchTap={handleItemClick}>
        {
          menus.map(function(elem, index) {
            return(<MenuItem primaryText={elem.text} leftIcon={<FontIcon className="material-icons menu-icon">{elem.id}</FontIcon>} key={index}/>)
          })
        }
      </Menu>
    )
}
IMenu.propTypes = {
    menus: PropTypes.array.isRequired
}
export default IMenu