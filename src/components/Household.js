import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import NewMember from './NewMember'
import ManageAccount from './ManageAccount'
import ShowMembers from './ShowMembers'

let api_url = 'http://localhost:3000'

// Components for Managing Basic Household Infos
class ManageHousehold extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTab: 'showMembers',
    }
  }

  // =========================
  //  Tab Sheet Management
  // =========================

  changeTabTo = (tabName) => {
    this.setState({
      showTab: tabName
    })
  }

  resetTabState = () => {
    this.setState({
      addMember: false,
      manageAccount: false,
      editMember: false,
      showMembers: true
    })
  }

  // =========================
  //  Member Handling
  // =========================


  // Create New Member
  createMember = (member) => {
    console.log(member)
    fetch(`${api_url}/members`, {
      body: JSON.stringify(member),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdMember => {
      console.log(createdMember);
      // this.state.showTab('showMembers')
    })
    .catch(err => console.log(err))
  }




  render() {
    return (
      <div>
        <h2>Your Family</h2>
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
              handleEditMember={this.handleEditMember}

            /> : ''
          }
          {
            this.state.showTab === 'newMember' ? <NewMember
              showTab={this.changeTabTo}
              createMember={this.createMember}

            /> : ''
          }
          {
            this.state.showTab === 'manageAccount' ? <ManageAccount
              showTab={this.changeTabTo}
            /> : ''
          }
        </div>

      </div>

    )
  }
}

export default ManageHousehold
