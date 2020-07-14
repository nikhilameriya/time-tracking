import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import history from '../history'
import { get } from 'lodash'
import { isUserLoggedIn } from '../actions/isUserLoggedIn'

import LinearProgress from 'material-ui/LinearProgress'

export class CheckAuth extends Component {
  static propTypes = {
    onCheckIsUserLoggedIn: PropTypes.func
  }

  componentWillMount() {
    this.props.onCheckIsUserLoggedIn()
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps != this.props) {
      const { userLoggedIn, location, router, isFetching } = this.props;
      if (isFetching) {
        return
      }
      if (userLoggedIn) {
        if (location.state && location.state.nextPathname) {
          router.replace(location.state.nextPathname)
        } else {
          router.replace('/tracker')
        }
      } else {
        history.push('/register')
      }
    }
  }

  render() {
    return (
      <div style={{
        marginTop: '30vh',
        textAlign: 'center'
      }}>
        Checking If you are my old buddy <br /><br />
        <LinearProgress mode="indeterminate" />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckIsUserLoggedIn: (uid, text) => {
      dispatch(isUserLoggedIn())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    userLoggedIn: get(state, "auth.userLoggedIn", null),
    isFetching: get(state, "auth.isFetching", null)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckAuth)