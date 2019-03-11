import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AuthService from '../services/user.service'

import Header from './Header'

import ManageHousehold from './Household'
import ManageTBs from './ManageTBs'
import ManageCashins from './ManageCashins'

import ChildList from './ChildList'

import ChildDashboard from './ChildDashboard'


let api_url = 'http://localhost:3000'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      children: [],
      manage: 'family-dashboard',
      childDetails: false
    }
    this.Auth = new AuthService()
    this.childName = 'Gus'
  }

  // handles navigation of management pages
  handleManagementOpts = (category) => {
    this.setState({
      manage: category
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
  toggleChildDetails = (childName) => {
    this.childName = childName
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

        <div>

          {this.state.manageHousehold ?
            <div>
              <Header
                auth={this.Auth}
                history={this.props.history}
                handleManagementOpts={this.handleManagementOpts}
              />
              <ManageHousehold
                handleManagementOpts={this.handleManagementOpts}
              />
            </div>
            :
            <div>
              {
                this.state.childDetails ?
                <div>
                  <ChildDashboard
                    childName={this.childName}
                    childDetails={this.toggleChildDetails}
                  />
                </div>
                :
                <div>
                <Header
                  auth={this.Auth}
                  history={this.props.history}
                  handleManagementOpts={this.handleManagementOpts}
                />
                <ChildList
                  children={this.state.children}
                  childDetails={this.toggleChildDetails}
                />
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
