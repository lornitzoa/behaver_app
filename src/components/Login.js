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


  handleSubmit = (e) => {
    e.preventDefault()
    this.Auth.login(this.state.username, this.state.password)
      .then(
        res => {
          this.props.history.replace('/dashboard')
        },
        error =>
          console.log(error)

      )
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  componentDidMount() {
    if(this.Auth.loggedIn()) {
      this.props.history.replace('/dashboard')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h1>Log In</h1>
        <label htmlFor='familyname'>Family Name</label>
        <input type='text' id='username' onChange={this.props.handleChange}/>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' onChange={this.props.handleChange}/>
        <input type='submit'/>
      </form>
    )
  }
}

export default Login
