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
      editMembers: false,
      editingMember: {
        id: 0,
        name: '',
        role: '',
        pin: '',
        family_id: ''
      },
      showMembers: true,
      members: [
        {
          id: 0,
          name: 'Adam',
          role: 'parent',
          pin: '5430',
          family_id: '0'
        },
        {
          id: 1,
          name: 'laura',
          role: 'parent',
          pin: '1234',
          family_id: '0'
        },
        {
          id: 2,
          name: 'Gus',
          role: 'child',
          pin: '9876',
          family_id: '0'
        },
        {
          id: 3,
          name: 'Mack',
          role: 'child',
          pin: '4567',
          family_id: '0'
        },
        {
          id: 4,
          name: 'Edie',
          role: 'child',
          pin: '0000',
          family_id: '0'
        }
      ]
    }
  }

  handleOpts = (opt) => {
    this.setState({
      [opt]: !this.state[opt],
      showMembers: !this.state.showMembers
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
              this.handleOpts('showMembers')
            }}>
            Members
          </button>
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
        </div>
        <div>
          {
            this.state.showMembers ?
            <div>
              <ul>
               {this.state.members.map((member, index) => {
                  return (
                    <li key={index}>{member.name}
                      <button onClick={() => {
                        this.handleOpts('editMember');
                        this.setMember(member)
                      }}>Edit</button>
                    </li>
                  )
                })}
              </ul>
            </div>
            :
            <div>
              {
                this.state.showMembers === false ?
                  <NewMember
                    member={this.state.member}
                    handleOpts={this.handleOpts}
                  />
                  :
                  ''
              }
            </div>
          }
          {this.state.addMember ?
            <NewMember/> : ''
          }
          {this.state.manageAccount ?
            <ManageAccount/> : ''
          }

        </div>

      </div>

    )
  }
}

export default ManageHousehold
