import React, { PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import muiThemeable from 'material-ui/styles/muiThemeable'

import DesktopNav from './Header/DesktopNav'

class Header extends React.Component {
  static propTypes = {
    userLoggedIn: PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.state = { type: 'desktop' };
  }

  componentDidMount() {
    const checkMediaQuery = () => {
      const type = window.matchMedia("(max-width: 550px)").matches ? 'mobile' : 'desktop';
      if (type !== this.state.type) {
        this.setState({ type });
      }
    };

    window.addEventListener('resize', checkMediaQuery);
    checkMediaQuery();
  }

  render() {
    const appBar = this.props.muiTheme.appBar
    const { userLoggedIn = false } = this.props

    return (
      <Toolbar style={{
        backgroundColor: "darkgrey"
      }}>
        <ToolbarGroup firstChild={true}>
          <FontIcon className="material-icons" style={{
            color: appBar.textColor
          }}>clock</FontIcon>
          <ToolbarTitle text="Time Tracker" style={{
            textAlign : "center",
            color: appBar.textColor
          }} />
        </ToolbarGroup>
        {
          <DesktopNav userLoggedIn={userLoggedIn} />
        }
      </Toolbar>
    );
  }
}

export default muiThemeable()(Header)