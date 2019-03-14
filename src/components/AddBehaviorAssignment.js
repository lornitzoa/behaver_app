import React, { Component } from 'react'

class AddBehaviorAssignment extends Component {
  constructor(props) {
    super(props)
    this.state= {
      // data object keys
      child_id: this.props.childID,
      behavior_id: 0,
      points: 0,
      // sets whether handling is for new data or editing data
      editing: false,
      // sets text of done/cancel button
      btnDone: 'Done'
    }
  }

  // checks if data is being sent in for editing
  checkIfEditing = () => {
    if(this.props.behavior) {
      let behavior = this.props.behavior
      this.getBehaviorID(this.props.behaviors, behavior)
      this.setState({
        child_id: behavior.child_id,
        points: behavior.points,
        editing: true
      })
    }

  }

  // if editing, gets id from behavior object for updating purposes
  getBehaviorID = (list, item) => {
    for(let i = 0; i < list.length; i++) {
      if(list[i].behavior === item.behavior) {
        this.setState({
          behavior_id: list[i].id
        })
      }
    }
  }

  // handles change of form inputs
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  // handles form submission
  handleSubmit = (e) => {
    e.preventDefault()
    // if form is in edit mode
    if(this.state.editing) {
      let updatedAssignment = {
        // create object to send to updateData function, with id
        id: this.props.behavior.id,
        child_id: this.state.child_id,
        behavior_id: parseInt(this.state.behavior_id),
        points: parseInt(this.state.points)
      }
      // send obejct to updateData function with route string
      this.props.updateData('behaviors/assignments', updatedAssignment)
      // return to list view
      this.props.cancel(null)
    } else {
      // if object is in new mode create object to send to addData function, without id
      let newAssignment = {
        child_id: this.state.child_id,
        behavior_id: parseInt(this.state.behavior_id),
        points: parseInt(this.state.points)
      }
      // send object to addData function with route string
      this.props.addData('behaviors/assignments', newAssignment)
      // reset state for form inputs
      this.setState({
        child_id: this.props.childID,
        behavior_id: 0,
        points: 0,
        editing: false
      })
    }

  }


  componentDidMount() {
    // check whether data is being sent in for editing
    this.checkIfEditing()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange} id='behavior_id' value={this.state.behavior_id}>
            <option value='0'>---Choose Behavior---</option>
              {this.props.behaviors.map((behavior, index) => {
                return (
                  <option key={index} value={behavior.id}>{behavior.behavior}</option>
                )
              })}
          </select>
          <input type='number' id='points' value={this.state.points} onChange={this.handleChange}/>
          <input type='submit'/>
        </form>
        <button onClick={() => {
          if(this.state.editing) {
            this.props.cancel(null)
          } else {
            this.props.changeSheetTo('tasks-behaviors')
          }

        }}>{this.state.btnDone}</button>
      </div>
    )
  }


}

export default AddBehaviorAssignment
