/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import PropTypes from 'prop-types'

import { Card, CardHeader } from 'material-ui/Card'

class ICard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, subtitle } = this.props
        //提供4个接口参数给container做设置，可以不传参。
        return (
            <Card expanded={false} style={{backroundColor: 'white', margin: '.5rem', minHeight: '12rem'}}>
                <CardHeader
                  title={title}
                  subtitle={subtitle}
                  actAsExpander={false}
                  showExpandableButton={false}
                />
                {this.props.children}
            </Card>
        )
    }
}
//严格来说，这些暴露给外部的参数都需要做验证,常用的验证类型为array，bool，func，number，object，string
ICard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}
export default ICard