import React, {Component} from 'react'
import TasksBehaviors from './TasksBehaviors'
import CashIns from './CashIns'

let api_url = 'http://localhost:3000'

class ChildDashboard extends Component {
  constructor(props) {
    super(props)
    this.state ={
      sheet: 'manage-tbs',
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
    console.log(this.state.childID);
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
        </div>

      </div>
    )
  }
}

export default ChildDashboard
