import React, {Component} from 'react'
import axios from 'axios'

import TasksBehaviors from './TasksBehaviors'
import CashIns from './CashIns'

import ScoreBoard from './ScoreBoard'




let api_url = 'http://localhost:3000'

class ChildDashboard extends Component {
  constructor(props) {
    super(props)
    this.state ={
      sheet: 'tasks-behaviors',



    }
  }

  // handle what component the page is showing
  changeSheetTo = (sheet) => {
    this.setState({
      sheet: sheet
    })
  }

  // update score on task completion of behavior points rewards
  updateScore = (id, data) => {
    // console.log(id);
    console.log(data);

    axios.patch(`${api_url}/scores/${id}`, data)
      .then(updatedData => {
        return updatedData.data
      })
      .then(resData => {
        console.log(resData);
        this.props.getData('scores')
      })
      .then(err => console.log(err))
  }




  componentDidMount() {
    // console.log(this.props.child);
    // console.log(this.props.reinforcements);
    //// get data required for this component and its children
    this.props.getData('tasks/assignments')
    this.props.getData('reinforcements/assignments')
    this.props.getData('behaviors/assignments')

    // console.log(this.props.score);
    // this.updateScore(this.props.child[0]. this.props.tasksassignments)
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
                tasksassignments={this.props.tasksassignments.filter(task => task.completed === 'f')}
                behaviors={this.props.behaviors}
                behaviorsassignments={this.props.behaviorsassignments}
                changeSheetTo={this.changeSheetTo}
                child={this.props.child}
                childID={this.props.child[0].member_id}
                addData={this.props.addData}
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
                availablePoints={this.props.score[0].points_available + this.props.score[0].stashed_cash}

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
