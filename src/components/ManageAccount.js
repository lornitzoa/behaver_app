import React, {Component} from 'react'

class ManageAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      familyname: localStorage.getItem('username'),
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let accountInfo = {
      familyname: this.state.familyname,
      password: this.state.password
    }
    this.props.updateAccount(accountInfo)
    this.props.showTab('showMembers')
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div>
        Edit Account
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='familyname'>Family Name</label>
          <input type='text' onChange={this.handleChange} id='familyname'/>
          <label htmlFor='password'>Update Password</label>
          <input type='password' onChange={this.handleChange} id='password'/>
          <input type='submit'/>
        </form>
        <button onClick={() => {
          this.props.showTab('showMembers')
        }}>Done</button>
      </div>
    )
  }
}

export default ManageAccount
