import React, { Component } from 'react'

class TasksBehaviors extends Component {


  componentDidMount() {
    console.log(this.props.behaviorsassignments);
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
        <div>
          Behaviors
          <button onClick={() => {
            this.props.changeSheetTo('assign-behavior')
          }}>Assign Behavior</button>
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
            {this.props.behaviorsassignments.map((behavior, index) => {
              return (
                <tr key={index}>
                  <td>{behavior.behavior}</td>
                  <td>{behavior.targeted_for}</td>
                  <td>{behavior.points}</td>
                  <td><button>+</button>
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
