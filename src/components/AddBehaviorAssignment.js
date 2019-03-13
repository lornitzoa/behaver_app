import React, { Component } from 'react'

class AddBehaviorAssignment extends Component {
  constructor(props) {
    super(props)
    this.state= {
      child_id: this.props.childID,
      behavior_id: 0,
      points: 0
    }
  }

  checkIfEditing = () => {

    if(this.props.behavior) {
      this.getBehaviorID(this.props.behaviors, this.props.behavior)
      this.setState({
        child_id: this.props.behavior.child_id,
        points: this.props.behavior.points
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
    console.log(this.state);
    this.props.addData('behaviors/assignments', this.state)
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
          this.props.cancel(null)
        }}>Cancel</button>
      </div>
    )
  }


}

export default AddBehaviorAssignment
