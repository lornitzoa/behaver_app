import React, { Component } from 'react'
import NewMember from './NewMember'

class ShowMembers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      staticState: true,
      editingMember: {},
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
    this.member = {}
  }



  setMember = (member) => {
    this.member = member
  }

  changeStaticState = () => {
    this.setState({
      staticState: false
    })
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
                      <button onClick={() => {
                        this.setMember(member);
                        this.changeStaticState()
                      }}>Edit</button>
                    </li>
                  )
                })}
              </ul>
              :
              <NewMember member={this.member} showTab={this.props.showTab}/>
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
