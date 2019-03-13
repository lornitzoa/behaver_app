import React, { Component } from 'react'
// import Header from './Header'
import PinInput from 'react-pin-input'


class NewMember extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Directs functionality based on if member is being added or edited
      type: 'addMember',
      name: '',
      role: '',
      pin: '',
      // Members should only added to the currently logged in household
      family_id: localStorage.getItem('family_id')
    }
  }

  // check if member is being sent in for editing
  checkIfEditing = () => {
    // console.log(this.props.member);
    if(this.props.member) {
      this.setState({
        // direct form functionality for editing  member
        type: 'editMember',
        name: this.props.member.name,
        role: this.props.member.role,
        pin: this.props.member.pin,
      })
    }
  }

  // Handles form submissions
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.type === 'addMember') {
      // create member to send to createMember route
      let member = {
        name: this.state.name,
        role: this.state.role,
        pin: this.state.pin,
        family_id: this.state.family_id
      }
      // send new member to create route
      this.props.createMember(member)
      // change sheet to ShowMembers
      this.props.showTab('showMembers')
    } else if(this.state.type === 'editMember') {
      // create member to send to updateMember route
      let updatedMember = {
        member_id: this.props.member.member_id,
        name: this.state.name,
        role: this.state.role,
        pin: this.state.pin,
        family_id: this.state.family_id
      }
      // send edited member to update route
      this.props.editMember(updatedMember)
      // change static state to return to ShowMembers component
      this.props.changeStaticState()
    }
  }

  // Handles input changes
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  // handles pin input changes
  handlePin = (e) => {
    this.setState({
      pin: e
    })
  }

  componentWillMount() {
    // check/set form functionality
    this.checkIfEditing()
  }

  render() {
    return(
      <div>
        <h3>Add new family member details</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            placeholder={this.state.name}
            onChange={this.handleChange}
            id='name'/>
          <label htmlFor='name'>role</label>
          <input
            type='text'
            placeholder={this.state.role}
            onChange={this.handleChange}
            id='role'/>
          <label htmlFor='parent_pin'>Pin (4 digit number)</label>
          <PinInput
            length={4}
            secret
            onChange={this.handlePin}
            id='pin'
          />
          <input type='submit'/>
        </form>
        <button onClick={() => {
          if(this.state.type === 'addMember') {
            this.props.showTab('showMembers')
          } else {
            this.props.changeStaticState()
          }
        }}>Done</button>
      </div>

    )
  }
}

export default NewMember
