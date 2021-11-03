import React from "react"
import { NavLink as RouterNavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// styles
import "./NavBar.css"
// eslint-disable-next-line
import {
  Container,
  Nav,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

import {
  Streamlit,
} from "streamlit-component-lib"

// eslint-disable-next-line
import { useAuth0 } from "@auth0/auth0-react"

class NavBar extends React.Component {

  constructor(props) {
    super(props)
    const {
      user,
      isAuthenticated,
      loginWithRedirect,
      loginWithPopup,
      logout,
      getAccessTokenSilently,
      getAccessTokenWithPopup,
    } = useAuth0()

    this.state = {
      authToken: false,
      user, isAuthenticated, loginWithRedirect, loginWithPopup, logout, getAccessTokenSilently, getAccessTokenWithPopup,
    }

  }

  // onRun  = props['props']['onRun']
  // var domain = props['props']['domain']

  // eslint-disable-next-line
  // const {
  //   user,
  //   isAuthenticated,
  //   loginWithRedirect,
  //   loginWithPopup,
  //   logout,
  //   getAccessTokenSilently,
  //   getAccessTokenWithPopup
  // } = useAuth0();
  //
  logoutWithRedirect = () =>
    this.state.logout({
      returnTo: window.location.origin,
    })

  getAccessToken = () => {
    if (this.state.authToken)
      return this.state.authToken

    try {
      let authToken = this.state.getAccessTokenSilently({
        audience: `https://${this.props.domain}/api/v2/`,
        scope: "read:current_user",
      })
      this.setState({ authToken })
      return this.state.authToken
    } catch (e) {
      let authToken = this.state.getAccessTokenWithPopup({
        audience: `https://${this.props.domain}/api/v2/`,
        scope: "read:current_user",
      })
      this.setState({ authToken })
      return this.state.authToken
    }
  }

  render() {
    if (this.state.isAuthenticated) {

      // essentially doing user["token"] = this.state.getAccessToken
      this.setState({
        user: {
          ...this.state.user,
          token: this.getAccessToken(),
        },
      })

      this.props.onRun(this.state.user)
    } else {
      this.props.onRun(false)
    }
    return <div className="nav-container">
      <Container className="login-component">
        {!this.state.isAuthenticated && (
          <Button
            color="primary"
            className="btn-margin"
            onClick={() => {
              this.state.loginWithPopup({}).then(() => {
                this.props.onRun(false)
              })
            }}
          >
            Log in
          </Button>
        )}
        {this.state.isAuthenticated && (
          <Button
            onClick={() => {
              this.state.logoutWithRedirect()
            }}
          >Logout
          </Button>
        )}
      </Container>
    </div>
  };
}

export default NavBar

