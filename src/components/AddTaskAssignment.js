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
      changed: false,
      editing: false,
      btnDone: 'Done'

    }
  }

  // Set data depending on whether user is intending to add new data or edit existing data.
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
        btnDone: 'Cancel'
      })
    }
  }

  // get task id from incoming edit data to update db with
  getTaskID = (list, item) => {
    for(let i = 0; i < list.length; i++) {
      if(list[i].task === item.task_name) {
        this.setState({
          task_id: list[i].id
        })
      }
    }
  }

  // handle form input changes
  handleChange = (e) => {
      if(e.target.id === 'required') {
        this.setState({
          changed: !this.state.changed,
          [e.target.id]: e.target.value
        })
      } else {
        this.setState({
          [e.target.id]: e.target.value
        })
      }

  }


  // handle form submission
  handleSubmit = (e) => {
    e.preventDefault()
    // if user is editing
    if(this.state.editing) {
      // create object to send to updateData function, includes task.id
      let updatedAssignment = {
        id: this.props.task.id,
        child_id: this.state.child_id,
        task_id: parseInt(this.state.task_id),
        frequency: this.state.frequency,
        time_of_day: this.state.time_of_day,
        points: parseInt(this.state.points),
        required: JSON.parse(this.state.required),
        completed: JSON.parse(this.state.completed)
      }
      // send object to updateData with route string
      this.props.updateData('tasks/assignments', updatedAssignment)
      // check if required parameter has been changed
      // if(this.state.changed === true) {
      //   // send data to update number of tasks in score table
      //   this.updateScoreTasks(this.state.child_id, updatedAssignment.required, 'update')
      // }

      // return to list view
      this.props.cancel(null)
    } else {
      // create object to send to addData function, does not include task.id
      let newAssignment = {
        child_id: this.state.child_id,
        task_id: parseInt(this.state.task_id),
        frequency: this.state.frequency,
        time_of_day: this.state.time_of_day,
        points: parseInt(this.state.points),
        required: JSON.parse(this.state.required),
        completed: JSON.parse(this.state.completed)
      }
      // console.log(newAssignment);
      // send object to addData with route string
      this.props.addData('tasks/assignments', newAssignment)
      // send data to update number of tasks in score table
      // this.updateScoreTasks(this.state.child_id, newAssignment.required, 'new')
      // reset state to clear form for more new data
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
    // check if user is editing
    this.checkIfEditing()
    // console.log(this.props.task);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
            <option value='weekdays'>Weekdays</option>
            <option value='weekends'>Weekends</option>
          </select>
          <select onChange={this.handleChange} id='time_of_day' value={this.state.time_of_day}>
            <option>--Choose Time of Day---</option>
            <option value='am'>AM</option>
            <option value='pm'>PM</option>
            <option value='any'>Any</option>
          </select>
          <input type='number' onChange={this.handleChange} id='points' value={this.state.points}/>
          <select onChange={this.handleChange} id='required' value={this.state.required}>
            <option>--Choose Option--</option>
            <option value='true'>Required</option>
            <option value='false'>Bonus</option>
          </select>
          <input type='submit'/>
        </form>
        {this.state.editing ?
          <button onClick={() => {
              this.props.cancel(null)
          }}>Cancel</button>
          :
          ""
        }

      </div>
    )
  }
}

export default AddTaskAssignment
