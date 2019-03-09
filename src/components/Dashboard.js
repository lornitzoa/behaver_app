import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthService from '../services/user.service'

import ManageHousehold from './Household'
import Header from './Header'


class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.Auth = new AuthService()
  }

  handleLogout = () => {
    this.Auth.logout()
    this.props.history.replace('/login')

  }


  render() {
    return (
      <div>
        <Header
          auth={this.Auth}
          history={this.props.history}
        />


      </div>

    )
  }
}

export default Dashboard
