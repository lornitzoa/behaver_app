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
    console.log(this.state.type);
    if(this.state.type === 'new') {
      let behavior = {
        behavior: this.state.behavior,
        targeted_for: this.state.targeted_for
      }
      console.log(behavior)
      this.props.addData('behaviors', behavior)
    } else if (this.state.type === 'edit') {
      let behavior = {
        id: this.props.behavior.id,
        behavior: this.state.behavior,
        targeted_for: this.state.targeted_for
      }
      console.log(behavior)
      this.props.setEditParams(null, 'behavior')
      this.props.updateData('behaviors', behavior)

    }

  }

  componentDidMount() {
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
