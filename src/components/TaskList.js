import React, { Component } from 'react'


class TaskList extends Component {
  render() {
    return (
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
                  <td>{task.id}</td>
                  <td>{task.task_name}</td>
                  <td>{task.points}</td>
                  <td>{task.required}</td>
                  <td>{task.frequency}</td>
                  <td>{task.completed}</td>
                  <td><button>Completed</button>
                  <button>Edit</button>
                  <button onClick={() => {
                    this.props.deleteData('tasks/assignments', task.id, index)
                  }}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    )
  }
}

export default TaskList
