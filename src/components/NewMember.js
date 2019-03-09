import React, { Component } from 'react'
import Header from './Header'
import PinInput from 'react-pin-input'

class NewMember extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'addMember',
      member: {
        name: 'NAME',
        role: 'ROLE',
        pin: 'PIN',
        family_id: '0' //will need to get family id from current account, maybe this should be stored in local storage as part of authentication process?
      }
    }
  }



  handlePin = (e) => {
    this.setState({
      parent_pin: e
    })
  }

  checkIfEditing = () => {
    console.log(this.props.member);
    if(this.props.member) {
      this.setState({
        type: 'editMember',
        member: {
          id: this.props.member.id,
          name: this.props.member.name,
          role: this.props.member.role,
          pin: this.props.member.role,
          family_id: this.props.member.family_id

        }
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
        <form>
          <label htmlFor='name'>Name</label>
          <input type='text' onChange={this.handleChange} placeholder={this.state.member.name}/>
          <label htmlFor='name'>role</label>
          <input type='text' onChange={this.handleChange} placeholder={this.state.member.role}/>
          <label htmlFor='parent_pin'>Parent Pin (4 digit number)</label>
          <PinInput length={4} secret onChange={this.handlePin} id='parent_pin'/>
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
