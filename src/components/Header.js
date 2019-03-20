import React, { Component } from 'react'
import {BrowserRouter as Router, Route, NavLink, Link, Switch} from 'react-router-dom'

import Dashboard from './Dashboard'
import ManageHousehold from './Household'
import ManageTBs from './ManageTBs'
import ManageCashins from './ManageCashins'



// Header and General Navigations
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      familyName: ''
    }
    // // connects to user.services for Authorization
    // this.Auth = new AuthService()
  }

  // logout functionality
  handleLogout = () => {
    this.props.logout()
    // history.replace('/login')
    // this.props.authStatus(false)
    // return <Redirect to='/'/>
  }

  // Get family name from local storge to display in header
  getFamilyName = () => {
    let familyName = localStorage.username
    this.setState({
      familyName: familyName.charAt(0).toUpperCase() + familyName.slice(1)
    })
  }

  componentDidMount() {
    this.getFamilyName()
  }

  render() {

    return (
      <Router>
        <div className='header'>
          <div className='header-titles'>
            <h1 id='h1-header'>{this.state.familyName} Family Dashboard</h1>
            <Link to='/login'><button onClick={this.handleLogout}>Log Out</button></Link>
          </div>
          <div className='nav-management'>
            <NavLink exact to='/dashboard'>
              <button>Main Dashbaord</button>
            </NavLink>
            <NavLink exact to='/household'>
              <button>Manage Household</button>
            </NavLink>

            <NavLink exact to='/manage-tbs'>
              <button>Manage Tasks & Behaviors</button>
            </NavLink>
            <NavLink exact to='/manage-cashins'>
              <button>Manage Cash Ins</button>
            </NavLink>
          </div>
          <Switch>
            <Route
              path='/dashboard'
              component={Dashboard}
            />
            <Route
              path='/household'
              component={ManageHousehold}
            />
            <Route
              path='/manage-tbs'
              component={ManageTBs}
            />
            <Route
              path='/manage-cashins'
              component={ManageCashins}
            />
          </Switch>

        </div>
      </Router>
    )
  }

}

export default Header
