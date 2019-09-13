import React, { Component } from 'react'
import AddTaskAssignment from './AddTaskAssignment'

class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editIndex: null,

    }
  }

  //  change whether task item is in view or edit mode
  goToEdit = (index) => {
    this.setState({
      editIndex: index
    })
  }

  // get task id from incoming edit data to update db with
  getTaskID = (list, item) => {
    // console.log(list);
    // console.log(item);
    for(let i = 0; i < list.length; i++) {
      if(list[i].task === item.task_name) {
        return list[i].id
        // this.setState({
        //   task_id: list[i].id
        // })
      }
    }
  }

  // prepare boolean values for data entry
  checkBooleans = (string) => {
    if(string === 't') {
      return true
    } else if(string === 'f') {
      return false
    }
  }

  // handle completion of task
  handleCompleted = (task) => {
    console.log('clicked');
    let points = {
      task_points_earned: parseInt(task.points)
    }
    // console.log(points);
    this.props.updateScore(task.child_id, points)
    // // create variable to hold taskID, retrieved from getTaskID function
    // // using the task list and the completed task
    let taskID = this.getTaskID(this.props.tasks, task)
    let required = this.checkBooleans(task.required)
    // create data object to update assigned task table
    // console.log(`required status: ${task.required}`);
    let updateComplete = {
      id: task.id,
      child_id: task.child_id,
      task_id: taskID,
      frequency: task.frequency,
      time_of_day: task.time_of_day,
      points: parseInt(task.points),
      required: required,
      completed: true,
      family_id: parseInt(localStorage.getItem('family_id'))
    }
    // console.log(updateComplete);
    // send data objec to updateData function with route
    // console.log(updateComplete);
    this.props.updateData('tasks/assignments', updateComplete)
  }

  componentDidMount() {

    // console.log(this.props.score);
    // console.log(this.props.tasksassignments);
  }

  render() {
    return (
      <div>
        <div className='list-headers'>
          <h3 className='list-title-header'>Task</h3>
          <h3 className='list-data-header'>Points</h3>
          <h3 className='list-data-header'>Required</h3>
          <h3 className='list-data-header'>When</h3>

        </div>

        {this.props.tasksassignments.map((task, index) => {

          return (
            <div key={index}>
            {this.state.editIndex === index ?
              <div>
                <AddTaskAssignment
                  index={index}
                  task={task}
                  updateData={this.props.updateData}
                  updateScore={this.props.updateScore}
                  tasks={this.props.tasks}
                  cancel={this.goToEdit}
                />
              </div>
              :
              <div className='items'>
                <div className='data'>
                  <h4>{task.task_name}</h4>
                  <p>{task.points}</p>
                  {task.required === 't' ?
                    <p>Required</p>
                    :
                    <p>Bonus</p>
                  }
                  <p>{task.time_of_day}</p>
                  <p>{task.task_id}</p>
                </div>
                <div className='list-buttons'>
                  <i className="fas fa-check-circle fa-2x" onClick={() => {
                    this.handleCompleted(task)
                    // this.props.updateScore('task_points_earned', task.points)
                  }}></i>
                  <button onClick={() => {
                    this.goToEdit(index)
                  }}>Edit</button>
                  <button onClick={() => {
                    this.props.deleteData('tasks/assignments', task.id)
                  }}>Delete</button>
                </div>
              </div>
            }
            </div>
          )
        })}


      </div>

    )
  }
}

export default TaskList
