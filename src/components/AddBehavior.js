import React, { Component } from 'react'

class AddBehavior extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'new',
      behavior: 'Add Behavior',
      targeted_for: 'Placeholder'
    }
  }

  checkIfEditing = () => {
    if(this.props.behavior) {
      this.setState({
        type: 'edit',
        behavior: this.props.behavior.behavior,
        targeted_for: this.props.behavior.targeted_for
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if(this.state.type === 'new') {
      let behavior = {
        behavior: this.state.behavior,
        targeted_for: this.state.targeted_for
      }
      this.props.addBehavior(behavior)
    } else if (this.state.type === 'edit') {
      let behavior = {
        id: this.props.behavior.id,
        behavior: this.state.behavior,
        targeted_for: this.state.targeted_for
      }

      if(behavior.targeted_for === 'Increase') {
        this.props.setEditParams(null, 'behaviorINIndex')
      } else if(behavior.targeted_for === 'Decrease') {
        this.props.setEditParams(null, 'behaviorDEIndex')
      }
      console.log(this.props.behaviorINIndex)
      console.log(this.props.behaviorDEIndex)
      this.props.editBehavior(behavior)

    }

  }

  componentDidMount() {
    this.checkIfEditing()
    console.log(this.props.behaviorINIndex)
    console.log(this.props.behaviorDEIndex)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' id='behavior' placeholder={this.state.behavior} onChange={this.handleChange}/>
          <select value={this.state.targeted_for} id='targeted_for' onChange={this.handleChange}>
            <option value='Placeholder'>Targeted for</option>
            <option value='Increase'>Increase</option>
            <option value='Decrease'>Decrease</option>
          </select>
          <input type='submit' value='Add'/>
        </form>
      </div>
    )
  }
}

export default AddBehavior
