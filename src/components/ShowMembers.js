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
    this.member = member
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
                      <button onClick={() => {
                        this.setMember(member);
                        this.changeStaticState()
                      }}>Edit</button>
                    </li>
                  )
                })}
              </ul>
              :
              <NewMember
                member={this.member}
                changeStaticState={this.changeStaticState}
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
