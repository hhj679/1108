/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import PropTypes from 'prop-types'

import { Card, CardHeader, CardTitle } from 'material-ui/Card'

class ICard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, subtitle, headerTitle, headerAvatar, headerSubtitle, style } = this.props
        //提供4个接口参数给container做设置，可以不传参。
        let headerJSX = null, titleJSX = null;
        if(headerTitle) {
            headerJSX = (
                <CardHeader
                  title={headerTitle}
                  avatar={headerAvatar}
                  subtitle={headerSubtitle}
                  actAsExpander={false}
                  showExpandableButton={false}
                />
            )
        }
        if(title) {
            titleJSX = (<CardTitle title={title} subtitle={subtitle} />)
        }
        const mystyle= style||{};
        mystyle.backroundColor = 'white',
        mystyle.margin = '.5rem';
        mystyle.minHeight = '12rem';
        return (
            <Card expanded={false} style={mystyle}>
                {headerJSX}
                {titleJSX}
                {this.props.children}
            </Card>
        )
    }
}
//严格来说，这些暴露给外部的参数都需要做验证,常用的验证类型为array，bool，func，number，object，string
ICard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    headerTitle: PropTypes.string,
    headerAvatar: PropTypes.string,
    headerSubtitle: PropTypes.string,
    style: PropTypes.object
}
export default ICard