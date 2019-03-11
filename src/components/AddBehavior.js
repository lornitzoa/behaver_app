import React, { Component } from 'react'

class AddBehavior extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'addNew',
      behavior: 'New Behavior',
      targeted_for: 'Increase'
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let behavior = {
      behavior: this.state.behavior,
      targeted_for: this.state.targeted_for
    }
    this.props.addBehavior(behavior)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='behavior'>Behavior</label>
          <input type='text' id='behavior' onChange={this.handleChange}/>
          <label htmlFor='targeted-for'>Targeted For</label>
          <select value={this.state.targeted_for} id='targeted_for' onChange={this.handleChange}>
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
