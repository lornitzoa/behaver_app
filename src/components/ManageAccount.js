import React, {Component} from 'react'

class ManageAccount extends Component {
  render() {
    return (
      <div>
        Edit Account
        <button onClick={() => {
          this.props.handleOpts('manageAccount');
          this.props.handleOpts('showMembers')
        }}>Done</button>
      </div>
    )
  }
}

export default ManageAccount
