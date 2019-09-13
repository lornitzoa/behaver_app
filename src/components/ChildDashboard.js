import React, {Component} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'

import TasksBehaviors from './TasksBehaviors'
import CashIns from './CashIns'

import ScoreBoard from './ScoreBoard'



let api_url = 'https://behaver-api.herokuapp.com'
// let api_url = 'http://localhost:3000'

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
    axios.patch(`${api_url}/scores/${id}`, data)
      .then(updatedData => {
        // console.log(updatedData);
        return updatedData.data
      })
      .then(resData => {
        console.log("Scores: " + this.props.getData('scores'));
        this.props.getData('scores')
      })
      .then(err => console.log(err))
  }


  render() {
    return (
      <Router>
        <div>
        {this.props.child ?
          <div>
            <div className='header'>
              <h1 id='h1-header'>{this.props.child[0].name}'s Dashboard</h1>
              <ScoreBoard
                tasksassignments={this.props.tasksassignments}
                score={this.props.scores}
              />
              <div>

                  <button
                    onClick={() => {
                      this.props.changeView(null)
                    }}>
                    Back to Main Dashboard
                  </button>

              </div>
            </div>

            <div className='sheets-nav'>
              <Link to='/tasks-behaviors'>
                <button>
                  Tasks & Behaviors
                </button>
              </Link>
              <Link to='/cash-ins'>
                <button>
                  Cash Ins
                </button>
              </Link>
            </div>
            <div className='sheets'>

              <Switch>
                <Route
                  path='/tasks-behaviors'
                  render={() =>
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
                  }
                />
                <Route
                  path='/cash-ins'
                  render={() =>
                    <CashIns
                      child={this.props.child}
                      cashIns={this.props.reinforcements}
                      availableCashIns={this.props.reinforcementsassignments}
                      updateScore={this.updateScore}
                      deleteData={this.props.deleteData}
                      updateData={this.props.updateData}
                      addData={this.props.addData}
                      availablePoints={this.props.scores[0].points_available + this.props.scores[0].stashed_cash}

                    />
                  }
                />

              </Switch>
            </div>
          </div>
          :
          <Redirect to='/overview'/>

        }


        </div>
      </Router>
    )
  }
}

export default ChildDashboard
