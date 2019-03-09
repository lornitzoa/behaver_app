import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import NewMember from './NewMember'
import ManageAccount from './ManageAccount'



// Manages Household
class ManageHousehold extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addMember: false,
      manageAccount: false,
      members: ['Adam', 'Laura', 'Gus', 'Mack', 'Edie', 'Sue', 'Doug', 'Anna','Babysitter']
    }
  }

  handleOpts = (opt) => {
    console.log(opt);
    this.setState({
      [opt]: !this.state[opt]
    })
  }

  render() {
    return (
      <div>
        <h2>Your Family</h2>
        <button onClick={() => {
            this.handleOpts('addMember')
          }}>
          Add Member
        </button>
        <button onClick={() => {
            this.handleOpts('manageAccount')
          }}>
          Manage Account
        </button>
        <button onClick={() => {
            this.handleOpts('manageMembers')
          }}>
          Manage Members
        </button>
        <div>
          {this.state.addMember ?
            <NewMember
              handleOpts={this.handleOpts}
            /> : ''}
          {this.state.manageAccount ?
            <ManageAccount
              handleOpts={this.handleOpts}
            /> : ''}
        </div>
        <div>
          <ul>
            {
              this.state.members ? this.state.members.map((member, index) => {
                return (
                  <li>{member}</li>
                )
              })
              :
              ''
            }
          </ul>
        </div>
      </div>

    )
  }
}

export default ManageHousehold
