import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AuthService from '../services/user.service'
import ManageHousehold from './Household'
import ChildOverview from './ChildOverview'
import Header from './Header'
import ChildDashboard from './ChildDashboard'

let api_url = 'http://localhost:3000'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      children: [],
      manageHousehold: false,
      childDetails: false
    }
    this.Auth = new AuthService()
  }

  // Open/Close Household Management Dashboard to manage members and account info. Will need to to limit access to parents only.
  toggleManageHousehold = () => {
    this.setState({
      manageHousehold: !this.state.manageHousehold,
    })
  }

  // get children from db and display Children in Children Overview component
  fetchChildren = () => {
    fetch(`${api_url}/members/child`)
      .then(data => data.json())
      .then(jData => {
        this.setState({
          children: jData
        })
      })
  }

  // Change whether dashboard shows overview of children or specific child's dashbaord
  toggleChildDetails = () => {
    console.log('clicked');
    this.setState({
      childDetails: !this.state.childDetails
    })
  }


  componentDidMount() {
    this.fetchChildren()
  }

  render() {
    return (
      <div>
        <Header
          auth={this.Auth}
          history={this.props.history}
        />
        <div>
          <button onClick={this.toggleManageHousehold}>Manage Household</button>
          {this.state.manageHousehold ?
            <div>
              <ManageHousehold
                toggleManageHousehold={this.toggleManageHousehold}
              />
            </div>
            :
            <div>
              {
                this.state.childDetails ?
                <div>
                  <ChildDashboard />
                </div>
                :
                <div>
                <table>
                  <thead>
                    <th>CHILD</th>
                    <th>BEHAVIOR POINTS</th>
                    <th>TASKS COMPLETED</th>
                    <th>DAILY SCORE</th>
                    <th>WEEKLY SCORE</th>
                  </thead>
                  {
                    this.state.children ? this.state.children.map((child, index) => {
                      return (
                        <ChildOverview
                          child={child}
                          key={index}
                          childDetails={this.toggleChildDetails}
                        />
                      )
                    })
                    :
                    ''
                  }
                </table>

                </div>
              }
            </div>
          }
        </div>
      </div>

    )
  }
}

export default Dashboard
