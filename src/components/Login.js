import React, { Component } from 'react'
import AuthService from '../services/user.service'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.Auth = new AuthService()
  }

  // handle form submission
  handleSubmit = (e) => {
    e.preventDefault()
    // send entered username and password to user.service login function
    this.Auth.login(this.state.username, this.state.password)
      .then(
        res => {
          // if successful redirect to dashboard
          this.props.history.replace('/dashboard')
        },
        error =>
          console.log(error)

      )
  }

  // handle form input changes
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  componentDidMount() {
    // check if user is already logged in, if so redirect to dashboard
    if(this.Auth.loggedIn()) {
      this.props.history.replace('/dashboard')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h1>Log In</h1>
        <label htmlFor='familyname'>Family Name</label>
        <input type='text' id='username' onChange={this.handleChange}/>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' onChange={this.handleChange}/>
        <input type='submit'/>
      </form>
    )
  }
}

export default Login
