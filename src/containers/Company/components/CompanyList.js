import React from 'react'
import PropTypes from 'prop-types'

import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

const CompanyList = (props) => {
    const { companys=[], onItemClick } = props
    //提供4个接口参数给container做设置，可以不传参。
    return (
        <List>
            {
                companys.map(function(c, i) {
                    return(
                        <ListItem
                            leftAvatar={<Avatar src={c.logo} />}
                            primaryText={c.name}
                            secondaryText={c.description}
                            key={i}
                            onClick={onItemClick.bind(this, c.id)}
                        />
                    )
                })
            }
        </List>
    )
}
//严格来说，这些暴露给外部的参数都需要做验证,常用的验证类型为array，bool，func，number，object，string
CompanyList.propTypes = {
    companys: PropTypes.array.isRequired,
    onItemClick: PropTypes.func
}
export default CompanyList