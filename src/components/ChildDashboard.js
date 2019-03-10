import React, {Component} from 'react'
import TasksBehaviors from './TasksBehaviors'

class ChildDashboard extends Component {
  constructor(props) {
    super(props)
    this.state ={
      sheet: 'tasks-behaviors'
    }
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
        <div className='tasks-behaviors'>
          <TasksBehaviors/>
        </div>

      </div>
    )
  }
}

export default ChildDashboard
