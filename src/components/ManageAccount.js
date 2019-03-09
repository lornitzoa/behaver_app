import React, {Component} from 'react'

class ManageAccount extends Component {

  handleSubmit = () => {
    {/*update info*/}
  }

  render() {
    return (
      <div>
        Edit Account
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='familyname'>Family Name</label>
          <input type='text'/>
          <label htmlFor='password'>Update Password</label>
          <input type='password'/>
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
