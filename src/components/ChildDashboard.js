import React, {Component} from 'react'
import TasksBehaviors from './TasksBehaviors'
import CashIns from './CashIns'

import AddTaskAssignment from './AddTaskAssignment'
import AddBehaviorAssignment from './AddBehaviorAssignment'



class ChildDashboard extends Component {
  constructor(props) {
    super(props)
    this.state ={
      sheet: 'tasks-behaviors',
      childID: null || this.props.child.member_id,
      todaysPoints: parseInt(this.props.score[0].behavior_points) + parseInt(this.props.score[0].task_points)
    }
  }


  changeSheetTo = (sheet) => {
    this.setState({
      sheet: sheet
    })
  }

  updateScore = (type, points) => {
    this.setState({
      todaysPoints: this.state.todaysPoints + parseInt(points)
    })
  }

  componentDidMount() {
    console.log(this.props.child);
    console.log(this.props.reinforcements);
    this.props.getData('tasks/assignments')
    this.props.getData('reinforcements/assignments')
    this.props.getData('behaviors/assignments')
  }


  render() {
    return (
      <div>
        <div className='header'>
          <h1 id='h1-header'>{this.props.child[0].name}'s Dashboard</h1>
          <div>
            <button onClick={() => {
              this.props.goToChildDashboard(null)
            }}>Back to Main Dashboard</button>
          </div>
        </div>
        <div className='score-board'>
          <div className='data'>
            <h2>Behavior Points</h2>
            <h3>{this.props.score[0].behavior_points}</h3>
          </div>
          <div className='data'>
            <h2>Tasks Completed</h2>
            <h3>{this.props.score[0].tasks_completed}</h3>
          </div>
          <div className='data'>
            <h2>Todays Points</h2>
            <h3>{this.state.todaysPoints}</h3>
          </div>
          <div className='data'>
            <h2>Stashed Points</h2>
            <h3>{this.props.score[0].stashed_cash}</h3>
          </div>
        </div>
        <div className='sheets-nav'>
          <button
            onClick={() => {
            this.changeSheetTo('tasks-behaviors')
            }}>
            Tasks & Behaviors
          </button>
          <button
            onClick={() => {
            this.changeSheetTo('cash-ins')
            }}>
            Cash Ins
          </button>
        </div>
        <div className='sheets'>
          {
            this.state.sheet === 'tasks-behaviors' ?
              <TasksBehaviors
                tasks={this.props.tasks}
                tasksassignments={this.props.tasksassignments}
                behaviors={this.props.behaviors}
                behaviorsassignments={this.props.behaviorsassignments}
                changeSheetTo={this.changeSheetTo}
                child={this.props.child}
                deleteData={this.props.deleteData}
                updateData={this.props.updateData}
                updateScore={this.updateScore}
              />
              :
              ''
          }
          {
            this.state.sheet === 'cash-ins' ?
              <CashIns
                cashIns={this.props.reinforcements}
                availableCashIns={this.props.reinforcementsassignments}
                updateScore={this.updateScore}
                child={this.props.child}
                deleteData={this.props.deleteData}
                updateData={this.props.updateData}
                addData={this.props.addData}
              />
              :
              ''
          }
          {
            this.state.sheet ==='assign-task' ?
            <AddTaskAssignment
              changeSheetTo={this.changeSheetTo}
              addData={this.props.addData}
              tasks={this.props.tasks}
              childID={this.props.child[0].member_id}
            />
            :
            ''
          }
          {
            this.state.sheet === 'assign-behavior' ?
            <AddBehaviorAssignment
              changeSheetTo={this.changeSheetTo}
              addData={this.props.addData}
              behaviors={this.props.behaviors}
              childID={this.props.child[0].member_id}
            />
            :
            ''
          }
        </div>

      </div>
    )
  }
}

export default ChildDashboard
