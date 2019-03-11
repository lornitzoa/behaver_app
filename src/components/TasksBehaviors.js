import React, { Component } from 'react'

class TasksBehaviors extends Component {


  componentDidMount() {
    console.log(this.props.tasks);
  }

  render() {
    return (
      <div>
        <div>
          TASKS
          {this.props.tasks.map((task, index) => {
            return (
              <li key={index}>{task.task_name}</li>
            )
          })}
        </div>
      </div>
    )
  }
}

export default TasksBehaviors
