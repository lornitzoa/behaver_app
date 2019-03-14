import React, { Component } from 'react'

class AddBehavior extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'new',
      behavior: 'Add Behavior',
      targeted_for: 'Placeholder',
      family_id: localStorage.getItem('family_id')
    }
  }

  // check if user is editing existing or adding new data
  checkIfEditing = () => {
    // console.log(this.state.family_id);
    // if data is being sent for editing
    if(this.props.behavior) {
      // set data to fill form
      this.setState({
        type: 'edit',
        behavior: this.props.behavior.behavior,
        targeted_for: this.props.behavior.targeted_for,
        family_id: this.props.behavior.family_id
      })
    }
  }

  // handles form input changes
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })

  }

  // handles form submission
  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state.type);
    // if new data is being entered
    if(this.state.type === 'new') {
      // create object to send to addData function, no id
      let behavior = {
        behavior: this.state.behavior,
        targeted_for: this.state.targeted_for,
        family_id: this.state.family_id
      }
      // console.log(behavior)
      // send object to addData function with route string
      this.props.addData('behaviors', behavior)
    } else if (this.state.type === 'edit') {
      // if editing data, create object to send to updateData function, with id
      let behavior = {
        id: this.props.behavior.id,
        behavior: this.state.behavior,
        targeted_for: this.state.targeted_for,
        family_id: this.state.family_id
      }
      // console.log(behavior)
      // return to list view
      this.props.setEditParams(null, 'behavior')
      // send data to updateData function
      this.props.updateData('behaviors', behavior)

    }

  }

  componentDidMount() {
    // check if data is being sent in for editing
    this.checkIfEditing()
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
