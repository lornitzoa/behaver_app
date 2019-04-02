import React, { Component } from 'react'

import TaskList from './TaskList'
import BehaviorList from './BehaviorList'

import AddTaskAssignment from './AddTaskAssignment'
import AddBehaviorAssignment from './AddBehaviorAssignment'

class TasksBehaviors extends Component {



  render() {
    return (
      <div className='tb-assignments'>
        <div className='lists'>
          <h1>Assigned Tasks</h1>
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
        </div>
        <div className='lists'>
          <h1>Targeted Behaviors</h1>
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
      </div>
    )
  }
}

export default TasksBehaviors
