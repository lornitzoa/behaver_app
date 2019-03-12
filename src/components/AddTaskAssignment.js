import React, { Component } from 'react'

class AddTaskAssignment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      child_id: '' || this.props.childID,
      task_id: '',
      frequency: '',
      time_of_day: '',
      points: 0,
      required: true,
      completed: false

    }
  }

  handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addData('tasks/assignments', this.state)
  }

  componentWillMount() {
    console.log(this.props.childID);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange} id='task_id'>
            <option>---Choose Task---</option>
            {this.props.tasks.map((task, index) => {
              return (
                <option key={index} value={task.id}>{task.task}</option>
              )
            })}
          </select>
          <select onChange={this.handleChange} id='frequency'>
            <option>---Choose Frequency---</option>
            <option value='daily'>Daily</option>
            <option value='weekly'>Weekly</option>
          </select>
          <select onChange={this.handleChange} id='time_of_day'>
            <option>--Choose Time of Day---</option>
            <option value='am'>AM</option>
            <option value='pm'>PM</option>
            <option value='any'>Any</option>
          </select>
          <input type='number' onChange={this.handleChange} id='points'/>
          <select onChange={this.handleChange} id='required'>
            <option value='true'>Required</option>
            <option value='false'>Bonus</option>
          </select>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default AddTaskAssignment
