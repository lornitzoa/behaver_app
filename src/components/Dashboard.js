import React, { Component } from 'react'

import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'

import ChildList from './ChildList'
import ChildOverview from './ChildOverview'
import ChildDashboard from './ChildDashboard'


// let api_url = 'https://behaver-api.herokuapp.com'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state ={
      viewDashboard: true,
      childID: null
    }
  }

  changeView = (childID) => {
    if (childID === null) {
      this.setState({
        viewDashboard: !this.state.viewDashboard
      })
    } else {
      this.setState({
        viewDashboard: !this.state.viewDashboard,
        childID: childID
      })
    }


  }

  componentDidMount() {
    this.props.getData('tasks/assignments')
    this.props.getData('reinforcements/assignments')
    this.props.getData('behaviors/assignments')

  }



  render() {
    return (
      <Router>
        <div>
          {this.state.viewDashboard ?
            <div>
              <Redirect to='/overview'/>
            </div>
            :
            <div>
              <Redirect to='/child-dashboard'/>
            </div>

          }

            <Route
              path='/overview'
              render={() =>
                <ChildOverview
                  scores={this.props.scores}
                  children={this.props.children}
                  changeView={this.changeView}
                />
              }
            />
            <Route
              path='/child-dashboard'
              render={() =>
                <ChildDashboard
                  getData={this.props.getData}
                  addData={this.props.addData}
                  deleteData={this.props.deleteData}
                  updateData={this.props.updateData}
                  tasks={this.props.tasks}
                  behaviors={this.props.behaviors}
                  reinforcements={this.props.reinforcements}
                  tasksassignments={this.props.tasksassignments.filter(task =>
                    task.child_id === this.state.childID)}
                  behaviorsassignments={this.props.behaviorsassignments.filter(task =>
                    task.child_id === this.state.childID)}
                  reinforcementsassignments={this.props.reinforcementsassignments}
                  scores={this.props.scores.filter(score => score.member_id === this.state.childID)}
                  changeView={this.changeView}
                  child={this.props.children.filter(child =>
                    child.member_id === this.state.childID
                  )}
                />
              }
            />

          </div>
        </Router>

    )
  }
}

export default Dashboard
