import React, { Component } from 'react'
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import NewMember from './NewMember'
import ManageAccount from './ManageAccount'
import ShowMembers from './ShowMembers'
// import AuthService from '../services/user.service'

let api_url = 'https://behaver-api.herokuapp.com'

// Components for Managing Basic Household Infos
class ManageHousehold extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTab: 'showMembers',
    }
  }

  // change sheet views
  changeTabTo = (tabName) => {
    this.setState({
      showTab: tabName
    })
  }

  // reset view state
  resetTabState = () => {
    this.setState({
      addMember: false,
      manageAccount: false,
      editMember: false,
      showMembers: true
    })
  }

  // Create New Member
  // createMember = (member) => {
  //   fetch(`${api_url}/members`, {
  //     body: JSON.stringify(member),
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .catch(err => console.log(err))
  // }


  render() {
    return (
      <div>
        <h1>Your Household</h1>
        <div>
          <button onClick={() => {
              this.changeTabTo('showMembers')
            }}> Members
          </button>
          <button onClick={() => {
              this.changeTabTo('newMember')
            }}>
            Add Member
          </button>
          <button onClick={() => {
              this.changeTabTo('manageAccount')
            }}> Manage Account
          </button>
        </div>
        <div className='tab-sheets'>
          {
            this.state.showTab === 'showMembers' ? <ShowMembers
              showTab={this.changeTabTo}
              getData={this.props.getData}
              addData={this.props.addData}
              deleteData={this.props.deleteData}
              updateData={this.props.updateData}
              members={this.props.members}

            /> : ''
          }
          {
            this.state.showTab === 'newMember' ?
            <NewMember
              getData={this.props.getData}
              addData={this.props.addData}
              deleteData={this.props.deleteData}
              updateData={this.props.updateData}
              showTab={this.changeTabTo}

            /> : ''
          }
          {
            this.state.showTab === 'manageAccount' ?
            <ManageAccount
              showTab={this.changeTabTo}
              updateAccount={this.updateAccount}
            /> : ''
          }
        </div>

      </div>

    )
  }
}

export default ManageHousehold
