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

  handleCompleted = (id, points, req) => {
    // console.log(id)
    // console.log(points)
    if(req === 't') {
      let updateData = {
        req_tasks_complete: 1,
        task_points_earned: points
      }
      this.props.updateScore(id, updateData)
      // console.log('req_tasks_complete')
    } else {
      let updateData = {
        bonus_tasks_complete: 1,
        task_points_earned: points
      }
      this.props.updateScore(id, updateData)
      // console.log('bonus_tasks_complete')
    }
  }

  componentDidMount() {
    // console.log(this.props.tasksassignments);
    console.log(this.props.score);
  }

  render() {
    return (
      <div>
        TASKS
        <button onClick={() => {
          this.props.changeSheetTo('assign-task')
        }}>Assign Task</button>
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
                </div>
                <div className='list-buttons'>
                  <i className="fas fa-check-circle fa-2x" onClick={() => {
                    this.handleCompleted(task.child_id, task.points, task.required)
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
