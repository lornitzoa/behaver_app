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
        />
        <BehaviorList

          deleteData={this.props.deleteData}
          updateData={this.props.updateData}
          behaviors={this.props.behaviors}
          behaviorsassignments={this.props.behaviorsassignments}
          changeSheetTo={this.props.changeSheetTo}
        />
      </div>
    )
  }
}

export default TasksBehaviors
