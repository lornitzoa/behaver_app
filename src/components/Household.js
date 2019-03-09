import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import NewMember from './NewMember'
import ManageAccount from './ManageAccount'
import ShowMembers from './ShowMembers'



// Manages Household
class ManageHousehold extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTab: 'showMembers',

    }

  }

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


  setMember = (member) => {
    console.log(member)
    this.setState({
      editingMember: {
        id: member.id,
        name: member.name,
        role: member.role,
        pin: member.role,
        family_id: member.family_id
      }
    })
    console.log(this.state.editingMember);
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

            /> : ''
          }
          {
            this.state.showTab === 'newMember' ? <NewMember
              showTab={this.changeTabTo}

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
