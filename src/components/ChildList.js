import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'

import ChildOverview from './ChildOverview'
import ChildDashboard from './ChildDashboard'

class ChildList extends Component {
  constructor(props) {
    super(props)
    this.state ={
      viewDashboard: true,
      childID: null
    }
  }

  changeView = (childID) => {
    this.setState({
      viewDashboard: !this.state.viewDashboard
    })
  }

  render() {
    return(
      <Router>
        <div>
          {this.state.viewDashboard ?
            
            <ChildOverview
              scores={this.props.scores}
              children={this.props.children}
              changeView={this.changeView}
            />
            :
            <ChildDashboard
              getData={this.props.getData}
              addData={this.addData}
              deleteData={this.deleteData}
              updateData={this.updateData}
              tasks={this.state.tasks}
              behaviors={this.state.behaviors}
              reinforcements={this.state.reinforcements}
              tasksassignments={this.state.tasksassignments.filter(task =>
                task.child_id === this.state.childID)}
              behaviorsassignments={this.state.behaviorsassignments.filter(task =>
                task.child_id === this.state.childID)}
              reinforcementsassignments={this.state.reinforcementsassignments}
              scores={this.props.scores}
              child={this.state.children.filter(child =>
                child.member_id === this.state.childID
              )}
            />

          }
        </div>
      </Router>

    )
  }
}

export default ChildList
