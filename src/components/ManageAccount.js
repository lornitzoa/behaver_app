import React, {Component} from 'react'

class ManageAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      familyname: localStorage.getItem('username'),
      password: ''
    }
  }

  // handle form submission
  handleSubmit = (e) => {
    e.preventDefault()
    // create object for updated data
    let accountInfo = {
      familyname: this.state.familyname,
      password: this.state.password
    }
    // send object to updateAccount function
    this.props.updateAccount(accountInfo)
    // change tab view
    this.props.showTab('showMembers')
  }

  // handle form input changes
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <h1>UNDER CONSTRUCTION</h1>
    )

  }

  // render() {
  //   return (
  //     <div>
  //       <h1>Edit Account Details</h1>
  //       <form onSubmit={this.handleSubmit}>
  //         <label htmlFor='familyname'>Family Name</label>
  //         <input type='text' onChange={this.handleChange} id='familyname'/>
  //         <label htmlFor='password'>Update Password</label>
  //         <input type='password' onChange={this.handleChange} id='password'/>
  //         <input type='submit'/>
  //       </form>
  //       <button onClick={() => {
  //         this.props.showTab('showMembers')
  //       }}>Done</button>
  //     </div>
  //   )
  // }
}

export default ManageAccount
