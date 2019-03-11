import React, {Component} from 'react'
import TasksBehaviors from './TasksBehaviors'
import CashIns from './CashIns'


class ChildDashboard extends Component {
  constructor(props) {
    super(props)
    this.state ={
      sheet: 'manage-tbs'
    }
  }

  changeSheetTo = (sheet) => {
    this.setState({
      sheet: sheet
    })
  }

  render() {
    return (
      <div>
        <div className='header'>
          <h1 id='h1-header'>{this.props.childName}'s Dashboard</h1>
          <div>
            <button onClick={() => {
              this.props.childDetails('')
            }}>Back to Main Dashboard</button>
          </div>
        </div>
        <div className='score-board'>
          <div class='data'>
            <h2>Behavior Points</h2>
            <h3>50</h3>
          </div>
          <div class='data'>
            <h2>Tasks Completed</h2>
            <h3>3/5</h3>
          </div>
          <div class='data'>
            <h2>Todays Points</h2>
            <h3>3/5</h3>
          </div>
          <div class='data'>
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
              <TasksBehaviors/>
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
