import React, { Component } from 'react'
import PinInput from 'react-pin-input'
import AuthService from '../services/user.service'

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      parent_pin: ''
    }
    this.Auth = new AuthService()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.username && this.state.password) {
      let user = {
        username: this.state.username,
        password: this.state.password
      }
      this.Auth.register(user)
        .then(
          res => {
            this.props.history.replace('/login')
          }
        )
    }
  }

  handlePin = (e) => {
    this.setState({
      parent_pin: e
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h1>Create Your Family</h1>
        <label htmlFor='username'>Family Name</label>
        <input type='text' id='username' onChange={this.handleChange}/>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' onChange={this.handleChange}/>
        <label htmlFor='parent_pin'>Parent Pin (4 digit number)</label>
        <PinInput length={4} secret onChange={this.handlePin} id='parent_pin'/>
        <input type='submit'/>
      </form>
    )
  }
}

export default CreateAccount
