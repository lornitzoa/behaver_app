import React, { Component } from 'react'

class AddBehaviorAssignment extends Component {
  constructor(props) {
    super(props)
    this.state= {
      child_id: this.props.childID,
      behavior_id: 0,
      points: 0,
      editing: false,
      btnDone: 'Done'
    }
  }

  
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

  getBehaviorID = (list, item) => {
    for(let i = 0; i < list.length; i++) {
      if(list[i].behavior === item.behavior) {
        this.setState({
          behavior_id: list[i].id
        })
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.editing) {
      let updatedAssignment = {
        id: this.props.behavior.id,
        child_id: this.state.child_id,
        behavior_id: parseInt(this.state.behavior_id),
        points: parseInt(this.state.points)
      }
      this.props.updateData('behaviors/assignments', updatedAssignment)
      this.props.cancel(null)
    } else {
      let newAssignment = {
        child_id: this.state.child_id,
        behavior_id: parseInt(this.state.behavior_id),
        points: parseInt(this.state.points)
      }
      this.props.addData('behaviors/assignments', newAssignment)
      this.setState({
        child_id: this.props.childID,
        behavior_id: 0,
        points: 0,
        editing: false
      })
    }

  }


  componentDidMount() {
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
