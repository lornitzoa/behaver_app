import React, { Component } from 'react'

import TaskList from './TaskList'
import BehaviorList from './BehaviorList'

import AddTaskAssignment from './AddTaskAssignment'
import AddBehaviorAssignment from './AddBehaviorAssignment'

class TasksBehaviors extends Component {


  // componentDidMount() {
  //   // console.log(this.props.tasksassignments);
  // }

  render() {
    return (
      <div>
        <AddTaskAssignment
          changeSheetTo={this.changeSheetTo}
          addData={this.props.addData}
          tasks={this.props.tasks}
          childID={this.props.childID}
          updateScore={this.updateScore}
        />
        <TaskList
          deleteData={this.props.deleteData}
          updateData={this.props.updateData}
          tasks={this.props.tasks}
          tasksassignments={this.props.tasksassignments}
          changeSheetTo={this.props.changeSheetTo}
          updateScore={this.props.updateScore}
        />
        <AddBehaviorAssignment
          changeSheetTo={this.changeSheetTo}
          addData={this.props.addData}
          behaviors={this.props.behaviors}
          childID={this.props.childID}
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
