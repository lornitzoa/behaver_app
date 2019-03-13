import React, { Component } from 'react'

class AddTaskAssignment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      child_id: this.props.childID,
      task_id: 0,
      frequency: '',
      time_of_day: '',
      points: 0,
      required: true,
      completed: false,
      editing: false,
      btnDone: 'Done'

    }
  }

  checkIfEditing = () => {
    if(this.props.task) {
      let task = this.props.task
      this.getTaskID(this.props.tasks, task)
      this.setState({
        child_id: task.child_id,
        frequency: task.frequency,
        time_of_day: task.time_of_day,
        points: task.points,
        required: task.required,
        editing: true,
        btnDone: 'Edit'
      })
    }
  }

  getTaskID = (list, item) => {
    for(let i = 0; i < list.length; i++) {
      if(list[i].task === item.task_name) {
        this.setState({
          task_id: list[i].id
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
        id: this.props.task.id,
        child_id: this.state.child_id,
        task_id: parseInt(this.state.task_id),
        frequency: this.state.frequency,
        time_of_day: this.state.time_of_day,
        points: parseInt(this.state.points),
        required: Boolean(this.state.required),
        completed: Boolean(this.state.completed)
      }
      console.log(updatedAssignment);
      this.props.updateData('tasks/assignments', updatedAssignment)
      this.props.cancel(null)
    } else {
      let newAssignment = {
        child_id: this.state.child_id,
        task_id: parseInt(this.state.task_id),
        frequency: this.state.frequency,
        time_of_day: this.state.time_of_day,
        points: parseInt(this.state.points),
        required: Boolean(this.state.required),
        completed: Boolean(this.state.completed)
      }
      console.log(newAssignment);
      this.props.addData('tasks/assignments', newAssignment)
      this.setState({
        child_id: this.props.childID,
        task_id: 0,
        frequency: '',
        time_of_day: '',
        points: 0,
        required: true,
        completed: false,
        editing: false
      })
    }

  }

  componentDidMount() {
    this.checkIfEditing()
    console.log(this.props.task);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>task id: {this.state.task_id}</label>
          <select onChange={this.handleChange} id='task_id' value={this.state.task_id}>
            <option value='0'>---Choose Task---</option>
            {this.props.tasks.map((task, index) => {
              return (
                <option key={index} value={task.id}>{task.task}</option>
              )
            })}
          </select>
          <select onChange={this.handleChange} id='frequency' value={this.state.frequency}>
            <option>---Choose Frequency---</option>
            <option value='daily'>Daily</option>
            <option value='weekly'>Weekly</option>
          </select>
          <select onChange={this.handleChange} id='time_of_day' value={this.state.time_of_day}>
            <option>--Choose Time of Day---</option>
            <option value='am'>AM</option>
            <option value='pm'>PM</option>
            <option value='any'>Any</option>
          </select>
          <input type='number' onChange={this.handleChange} id='points' value={this.state.points}/>
          <select onChange={this.handleChange} id='required' value={this.state.required}>
            <option value='true'>Required</option>
            <option value='false'>Bonus</option>
          </select>
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

export default AddTaskAssignment
