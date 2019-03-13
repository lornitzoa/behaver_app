import React, { Component } from 'react'

class AddBehaviorAssignment extends Component {
  constructor(props) {
    super(props)
    this.state= {
      child_id: this.props.childID,
      behavior_id: '',
      points: 0
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
    console.log(this.props.behaviors);
    console.log(this.props.childID);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange} id='behavior_id'>
            <option>---Choose Behavior---</option>
              {this.props.behaviors.map((behavior, index) => {
                return (
                  <option key={index} value={behavior.id}>{behavior.behavior}</option>
                )
              })}
          </select>
          <input type='number' id='points' onChange={this.handleChange}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }


}

export default AddBehaviorAssignment
