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

  // Get Task Assignments
  getTaskAssignments = () => {
    fetch(`${api_url}/tasks/assignments/${this.state.childID}`)
      .then(data => data.json())
      .then(jData => {
        this.setState({
          taskAssignments: jData
        })
      })
      .then(err => console.log(err))
  }


  // Add Task Assignment
  addTaskAssignment = (task) => {
    fetch(`${api_url}/tasks/assignments`,
      {
        body: JSON.stringify(task),
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(addedTask => {
        return addedTask.json()
      })
      .then(jData => {
        console.log(jData)
      })
      .then(err => console.log(err))
  }




  // Delete Task Assignment

  // Update Task Assignment


  changeSheetTo = (sheet) => {
    this.setState({
      sheet: sheet
    })
  }

  componentDidMount() {
    this.getTaskAssignments()
  }


  render() {
    return (
      <div>
        <div className='header'>
          <h1 id='h1-header'>{this.props.child.name}'s Dashboard</h1>
          <div>
            <button onClick={() => {
              this.props.childDetails('')
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
                tasks={this.state.taskAssignments}
                changeSheetTo={this.changeSheetTo}
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
              addTask={this.addTask}
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
