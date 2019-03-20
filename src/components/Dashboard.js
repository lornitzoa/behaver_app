import React, { Component } from 'react'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import ChildList from './ChildList'
import ChildOverview from './ChildOverview'
import ChildDashboard from './ChildDashboard'


// let api_url = 'http://localhost:3000'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state ={
      viewDashboard: true,
      childID: null
    }
  }

  changeView = (childID) => {
    this.setState({
      viewDashboard: !this.state.viewDashboard,
      childID: childID
    })
  }

  componentDidMount() {
    // this.props.getData('tasks/assignments')
    // this.props.getData('reinforcements/assignments')
    // this.props.getData('behaviors/assignments')
  }



  render() {
    return (

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
            tasks={this.props.tasks}
            behaviors={this.props.behaviors}
            reinforcements={this.props.reinforcements}
            tasksassignments={this.props.tasksassignments.filter(task =>
              task.child_id === this.state.childID)}
            behaviorsassignments={this.props.behaviorsassignments.filter(task =>
              task.child_id === this.state.childID)}
            reinforcementsassignments={this.props.reinforcementsassignments}
            scores={this.props.scores.filter(score => score.member_id === this.state.childID)}
            child={this.props.children.filter(child =>
              child.member_id === this.state.childID
            )}
          />
        }


        </div>

    )
  }
}

export default Dashboard
