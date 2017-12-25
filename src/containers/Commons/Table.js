/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import PropTypes from 'prop-types'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

class ITable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data=[], header=[], fixedHeader=true, selectable=true, multiSelectable=false, displayRowCheckbox=false, height='8rem', showIndex=true } = this.props
       
        return (
            <Table
              fixedHeader={fixedHeader}
              selectable={selectable}
              multiSelectable={multiSelectable}
              height={height}
            >
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                    enableSelectAll={false}
                >
                    <TableRow>
                        {
                            header.map( (h, i) => (<TableHeaderColumn style={i==0?{width: '1rem',textAlign: 'center'}:{textAlign: 'center'}} tooltip={h} key={i}>{h}</TableHeaderColumn>) )
                        }
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={displayRowCheckbox}
                    deselectOnClickaway={false}
                    showRowHover={false}
                    stripedRows={false}
                >
                    {
                        data.data.map( (row, index) => (
                          <TableRow key={index}>
                            { showIndex?<TableRowColumn style={{width: '1rem'}}>{index}</TableRowColumn>:null}
                            {
                                data.columns.map( (h, i) => (<TableRowColumn style={{textAlign: 'center'}} key={index + '' + i}>{row[h]}</TableRowColumn>) )
                            }
                          </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        )
    }
}
//严格来说，这些暴露给外部的参数都需要做验证,常用的验证类型为array，bool，func，number，object，string
ITable.propTypes = {
    data: PropTypes.object.isRequired,
    header: PropTypes.array,
    fixedHeader: PropTypes.bool,
    selectable: PropTypes.bool,
    multiSelectable: PropTypes.bool,
    displayRowCheckbox: PropTypes.bool
}
export default ITable