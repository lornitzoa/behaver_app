import React, { Component } from 'react'
import Header from './Header'
import PinInput from 'react-pin-input'


class NewMember extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'addMember',
      name: '',
      role: '',
      pin: '',
      family_id: localStorage.getItem('family_id')
    }
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.type === 'addMember') {
      let member = {
        name: this.state.name,
        role: this.state.role,
        pin: this.state.pin,
        family_id: this.state.family_id
      }
      this.props.createMember(member)
      this.props.showTab('showMembers')
    } else if(this.state.type === 'editMember') {
      let updatedMember = {
        member_id: this.props.member.member_id,
        name: this.state.name,
        role: this.state.role,
        pin: this.state.pin,
        family_id: this.state.family_id
      }
      this.props.editMember(updatedMember)
      this.props.changeStaticState()
    }

  }

  clearForm = () => {
    this.setState({
      type: 'addMember',
      name: '',
      role: '',
      pin: '',
      family_id: localStorage.getItem('family_id')
    })
  }

  handlePin = (e) => {
    this.setState({
      pin: e
    })
  }

  checkIfEditing = () => {
    // console.log(this.props.member);
    if(this.props.member) {
      this.setState({
        type: 'editMember',
        name: this.props.member.name,
        role: this.props.member.role,
        pin: this.props.member.pin,
      })
    }
  }


  componentWillMount() {
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
