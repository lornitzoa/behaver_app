import React, { Component } from 'react'
// import {Link } from 'react-router-dom'




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
    this.props.auth.logout()
    this.props.history.replace('/login')

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
      <div className='header'>
        <div className='header-titles'>
          <h1 id='h1-header'>{this.state.familyName} Family Dashboard</h1>
          <button onClick={this.handleLogout}>Log Out</button>
        </div>
        <div className='nav-management'>
          <button onClick={() => {
            this.props.handleManagementOpts('family-dashboard')
            }}>Family Dashboard</button>

          <button onClick={() => {
            this.props.handleManagementOpts('household')
          }}>Manage Household</button>

          <button onClick={() => {
            this.props.handleManagementOpts('tasks-behaviors')
          }}>Manage Tasks & Behaviors</button>

          <button onClick={() => {
            this.props.handleManagementOpts('cash-ins')
          }}>Manage Cash Ins</button>

        </div>



      </div>
    )
  }

}

export default Header
