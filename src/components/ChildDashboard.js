import React, {Component} from 'react'
import TasksBehaviors from './TasksBehaviors'
import CashIns from './CashIns'

import AddTaskAssignment from './AddTaskAssignment'

let api_url = 'http://localhost:3000'

class ChildDashboard extends Component {
  constructor(props) {
    super(props)
    this.state ={
      sheet: 'tasks-behaviors',
      childID: null || this.props.child.member_id,
      taskAssignments: []
    }
  }
  //
  // // Get Task Assignments
  // getTaskAssignments = () => {
  //   fetch(`${api_url}/tasks/assignments/${this.state.childID}`)
  //     .then(data => data.json())
  //     .then(jData => {
  //       this.setState({
  //         taskAssignments: jData
  //       })
  //     })
  //     .then(err => console.log(err))
  // }
  //
  //
  // // Add Task Assignment
  // addTaskAssignment = (task) => {
  //   fetch(`${api_url}/tasks/assignments`,
  //     {
  //       body: JSON.stringify(task),
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json, text/plain, */*',
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     .then(addedTask => {
  //       return addedTask.json()
  //     })
  //     .then(jData => {
  //       console.log(jData)
  //     })
  //     .then(err => console.log(err))
  // }
  //



  changeSheetTo = (sheet) => {
    this.setState({
      sheet: sheet
    })
  }

  componentDidMount() {
    // console.log(this.props.tasksassignments);

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
            <h3>50</h3>
          </div>
          <div className='data'>
            <h2>Tasks Completed</h2>
            <h3>3/5</h3>
          </div>
          <div className='data'>
            <h2>Todays Points</h2>
            <h3>3/5</h3>
          </div>
          <div className='data'>
            <h2>Stashed Points</h2>
            <h3>3/5</h3>
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
                changeSheetTo={this.changeSheetTo}
                child={this.props.child}
              />
              :
              ''
          }
          {
            this.state.sheet === 'cash-ins' ?
              <CashIns/>
              :
              ''
          }
          {
            this.state.sheet == 'assign-task' ?
            <AddTaskAssignment
              changeSheetTo={this.changeSheetTo}
              addData={this.props.addData}
              tasks={this.props.tasks}
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
