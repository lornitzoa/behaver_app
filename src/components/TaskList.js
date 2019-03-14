import React, { Component } from 'react'
import AddTaskAssignment from './AddTaskAssignment'

class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editIndex: null
    }
  }

  //  change whether task item is in view or edit mode
  goToEdit = (index) => {
    this.setState({
      editIndex: index
    })
  }

  // componentDidMount() {
  //   // console.log(this.props.tasksassignments);
  // }

  render() {
    return (
      <div>
        TASKS
        <button onClick={() => {
          this.props.changeSheetTo('assign-task')
        }}>Assign Task</button>
        <div className='list-headers'>
          <h3>Task</h3>
          <h3>Points</h3>
          <h3>Required</h3>
          <h3>When</h3>
          <h3>Completed Today</h3>
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
                <p>{task.task_name}</p>
                <p>{task.points}</p>
                <p>{task.required}</p>
                <p>{task.frequency}</p>
                <p>{task.completed}</p>
                <button onClick={() => {
                  this.props.updateScore('task_points', task.points)
                }}>Completed</button>
                <button onClick={() => {
                  this.goToEdit(index)
                }}>Edit</button>
                <button onClick={() => {
                  this.props.deleteData('tasks/assignments', task.id)
                }}>Delete</button>
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
