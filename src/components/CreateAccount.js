import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import AuthService from '../services/user.service'

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      parent_pin: '',
      submitted: false
    }
    this.Auth = new AuthService()
  }

  // handle form submission
  handleSubmit = (e) => {
    e.preventDefault()
    // if username and password states have value
    if(this.state.username && this.state.password) {
      // create user object
      let user = {
        username: this.state.username,
        password: this.state.password
      }
      // send user to user.service register function to create new user
      this.Auth.register(user)
        .then(
          res => {
            // redirect to login page
            this.setState({
              submitted: true
            })
          }
        )
    }
  }

  // handles form pin input
  handlePin = (e) => {
    this.setState({
      parent_pin: e
    })
  }

  // handles form input changes
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    if(this.state.submitted) return <Redirect to='/login'/>
    return (

        <form onSubmit={this.handleSubmit}>
        <h1>Create Your Family</h1>
          <label htmlFor='username'>Family Name</label>
          <input type='text' id='username' onChange={this.handleChange}/>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' onChange={this.handleChange}/>
          <input type='submit'/>
        </form>

    )
  }
}

export default CreateAccount
