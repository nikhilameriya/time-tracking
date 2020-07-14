import React, { PropTypes } from 'react'

import FlatButton from 'material-ui/FlatButton'
import { ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar'
import muiThemeable from 'material-ui/styles/muiThemeable'

import { withRouter } from 'react-router'

const DesktopNav = (props) => {
  return (
    <ToolbarGroup />
  )
}

DesktopNav.propTypes = {
  userLoggedIn: PropTypes.bool
}

export default muiThemeable()(withRouter(DesktopNav))