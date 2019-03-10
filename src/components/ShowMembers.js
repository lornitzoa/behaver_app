import React, { Component } from 'react'
import NewMember from './NewMember'

let api_url = 'http://localhost:3000'

class ShowMembers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      staticState: true,
      editingMember: {},
      members: []
    }
    this.member = {}
    this.index = null
  }

  fetchMembers = () => {
    fetch(`${api_url}/members`)
      .then(data => data.json())
      .then(jData => {
        this.setState({
          members: jData
        })
      })
  }

  setMember = (member) => {
    this.setState({
      editingMember: {
        id: member.id,
        name: member.name,
        role: member.role,
        pin: member.role,
        family_id: member.family_id
      }
    })
  }

  editMember = (member) => {
    fetch(`${api_url}/members/${member.member_id}`,
      {
        body: JSON.stringify(member),
        method: 'PUT',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(updatedMember => {
        return updatedMember.json()
      })
      .then(jData => {
        this.fetchMembers()
      })
      .then(err => console.log(err))
  }

  deleteMember = (memberID, arrayIndex) => {
    fetch(`${api_url}/members/${memberID}`, {
      method: 'DELETE'
    })
    .then(data =>  {
      this.removeFromArr(arrayIndex)
    })
    .catch(err => console.log(err))
  }

  removeFromArr = (index) => {
    this.setState(prevState => {
      prevState['members'].splice(index, 1)
      return {
        'members': prevState['members']
      }
    })
  }


  setMemberInfo = (member, index) => {
    this.member = member
    this.index = index
  }

  changeStaticState = () => {
    this.setState({
      staticState: !this.state.staticState
    })
  }

  componentDidMount() {
    this.fetchMembers()
  }


  render() {
    return (
      <div>
        {this.state.members ?
          <div>
            {this.state.staticState ?
              <ul>
                {this.state.members.map((member, index) => {
                  return (
                    <li key={index}>
                      {member.name}
                      {member.id}
                      <button onClick={() => {
                        this.setMemberInfo(member, index);
                        this.changeStaticState()
                      }}>Edit</button>
                      <button onClick={() => {
                        this.deleteMember(member.member_id, index)
                      }}>Delete</button>
                    </li>
                  )
                })}
              </ul>
              :
              <NewMember
                member={this.member}
                index={this.index}
                changeStaticState={this.changeStaticState}
                editMember={this.editMember}

                />
            }
          </div>
          :
          ''
        }
      </div>
    )
  }
}

export default ShowMembers
