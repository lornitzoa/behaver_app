import React, { Component } from 'react'

import TaskList from './TaskList'
import BehaviorList from './BehaviorList'

// import AddBehaviorAssignment from './behaviorsassignments'


class TasksBehaviors extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    console.log(this.props.tasksassignments);
  }

  render() {
    return (
      <div>
        <TaskList
          deleteData={this.props.deleteData}
          updateData={this.props.updateData}
          tasks={this.props.tasks}
          tasksassignments={this.props.tasksassignments}
          changeSheetTo={this.props.changeSheetTo}
          updateScore={this.props.updateScore}
        />
        <BehaviorList

          deleteData={this.props.deleteData}
          updateData={this.props.updateData}
          behaviors={this.props.behaviors}
          behaviorsassignments={this.props.behaviorsassignments}
          changeSheetTo={this.props.changeSheetTo}
          updateScore={this.props.updateScore}
        />
      </div>
    )
  }
}

export default TasksBehaviors
