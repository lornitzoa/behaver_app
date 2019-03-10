import React, {Component} from 'react'
import TasksBehaviors from './TasksBehaviors'
import CashIns from './CashIns'

class ChildDashboard extends Component {
  constructor(props) {
    super(props)
    this.state ={
      sheet: 'tasks-behaviors'
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
          {this.state.sheet === 'tasks-behaviors' ?
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
