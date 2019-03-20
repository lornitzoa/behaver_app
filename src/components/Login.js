import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import AuthService from '../services/user.service'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      authorized: false
    }
    this.Auth = new AuthService()
  }

  // handle form submission
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state.username, this.state.password)
    // send entered username and password to user.service login function
    // this.Auth.login(this.state.username, this.state.password)
    //   .then(
    //     res => {
    //       // if successful redirect to dashboard
    //       this.props.auth(true)
    //       this.setState({
    //         authorized: true
    //       })
    //     },
    //     error =>
    //       console.log(error)
    //
    //   )
  }

  // handle form input changes
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  componentDidMount() {

  }

  render() {
    // if(this.state.authorized) return <Redirect to='/dashboard'/>
    return (
      <Router>
        <div>
          <form onSubmit={this.handleSubmit}>
          <h1 className='auth-headers'>Log In</h1>
            <label htmlFor='familyname'>Family Name</label>
            <input type='text' id='username' onChange={this.handleChange}/>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange}/>
            <input type='submit'/>
          </form>
        </div>
      </Router>

    )
  }
}

export default Login
