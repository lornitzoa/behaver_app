import React, { Component } from 'react'

class TasksBehaviors extends Component {


  componentDidMount() {
    console.log(this.props.tasks);
    console.log(this.props.tasksassignments);
  }

  render() {
    return (
      <div>
        <div>
          TASKS
          <button onClick={() => {
            this.props.changeSheetTo('assign-task')
          }}>Assign Task</button>
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Points</th>
                <th>Required</th>
                <th>When</th>
                <th>Completed Today</th>
              </tr>
            </thead>
            <tbody>
            {this.props.tasksassignments.map((task, index) => {
              return (
                <tr key={index}>
                  <td>{task.task_name}</td>
                  <td>{task.points}</td>
                  <td>{task.required}</td>
                  <td>{task.frequency}</td>
                  <td>{task.completed}</td>
                  <td><button>Completed</button>
                  <button>Edit</button>
                  <button>Delete</button></td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TasksBehaviors
