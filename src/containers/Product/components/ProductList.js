import React from 'react'
import PropTypes from 'prop-types'

import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import FontIcon from 'material-ui/FontIcon'

const ProductList = (props) => {
    const { products=[], onItemClick } = props
    //提供4个接口参数给container做设置，可以不传参。
    return (
        <GridList
          cellHeight={180}
        >
            {
                products.map(function(p, i) {
                    return(
                        <GridTile
                          key={p.id}
                          title={p.name}
                          subtitle={<span>by <b>{p.company}</b></span>}
                          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                          onClick={onItemClick}
                        >
                          <img src={p.img} />
                        </GridTile>
                    )
                })
            }
        </GridList>
    )
}
//严格来说，这些暴露给外部的参数都需要做验证,常用的验证类型为array，bool，func，number，object，string
ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    onItemClick: PropTypes.func
}
export default ProductList