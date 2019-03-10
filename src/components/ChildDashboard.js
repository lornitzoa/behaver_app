import React, {Component} from 'react'

class ChildDashboard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.childName}'s' DASHBOARD</h1>
        <button onClick={() => {
          this.props.childDetails('')
        }}>Back to Main Dashboard</button>
      </div>
    )
  }
}

export default ChildDashboard
