import React, {Component} from 'react'

class ChildDashboard extends Component {
  render() {
    return (
      <div>
        {this.props.childName}'s' DASHBOARD
        <button onClick={() => {
          this.props.childDetails('')
        }}>Back to Main Dashboard</button>
      </div>
    )
  }
}

export default ChildDashboard
