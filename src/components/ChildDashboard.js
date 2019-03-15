import React, {Component} from 'react'
import TasksBehaviors from './TasksBehaviors'
import CashIns from './CashIns'

import ScoreBoard from './ScoreBoard'

import AddTaskAssignment from './AddTaskAssignment'
import AddBehaviorAssignment from './AddBehaviorAssignment'



class ChildDashboard extends Component {
  constructor(props) {
    super(props)
    this.state ={
      sheet: 'tasks-behaviors',
      childID: null || this.props.child.member_id,
      // evaluate daily score


    }
  }

  // handle what component the page is showing
  changeSheetTo = (sheet) => {
    this.setState({
      sheet: sheet
    })
  }

  // update score on task completion of behavior points rewards
  updateScore = (type, points) => {
    this.setState({
      todaysPoints: this.state.todaysPoints + parseInt(points)
    })
  }



  componentDidMount() {
    // console.log(this.props.child);
    // console.log(this.props.reinforcements);
    //// get data required for this component and its children
    this.props.getData('tasks/assignments')
    this.props.getData('reinforcements/assignments')
    this.props.getData('behaviors/assignments')
    console.log(this.props.score);

    // console.log(this.props.reinforcementsassignments);
  }


  render() {
    return (
      <div>
        <div className='header'>
          <h1 id='h1-header'>{this.props.child[0].name}'s Dashboard</h1>
          <ScoreBoard
            tasksassignments={this.props.tasksassignments}
            score={this.props.score}
          />
          <div>
            <button onClick={() => {
              this.props.goToChildDashboard(null)
            }}>Back to Main Dashboard</button>
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
                child={this.props.child}
                cashIns={this.props.reinforcements}
                availableCashIns={this.props.reinforcementsassignments}
                updateScore={this.updateScore}
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
