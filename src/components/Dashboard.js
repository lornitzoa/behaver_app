import React, { Component } from 'react'
import axios from 'axios'
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
      members: [],
      tasks: [],
      behaviors: [],
      manage: 'family-dashboard',
      childDetails: false
    }
    this.Auth = new AuthService()
    this.child = {}
  }

  //////////////////////////////////////////////
  //               PAGE COMPONENT HANDLING
  //////////////////////////////////////////////

  // handles navigation of management pages
  handleManagementOpts = (category) => {
    this.setState({
      manage: category
    })
  }

  // Change whether dashboard shows overview of children or specific child's dashbaord
  // toggleChildDetails = (index) => {
  //   this.child = this.state.children[index]
  //   this.setState({
  //     childDetails: !this.state.childDetails
  //   })
  // }

  //////////////////////////////////////////////
  //               GET DATA
  //////////////////////////////////////////////

  // get children from db and display Children in Children Overview component
  getData = (dataType) => {
    axios.get(`${api_url}/${dataType}`)
      .then(json => json.data)
      .then(data => {
        this.setState({
          [dataType]: data
        })
      })
  }

  //////////////////////////////////////////////
  //               DELETE DATA
  //////////////////////////////////////////////
  deleteData = (dataType, id, arrIndex) => {
    axios.delete(`${api_url}/${dataType}/${id}`)
      .then(data => {
        this.removeFromArr(dataType, arrIndex)
      })
  }

  removeFromArr = (arr, index) => {
    this.setState(prevState => {
      prevState[arr].splice(index, 1)
      return {
        [arr]: prevState[arr]
      }
    })
  }

  //////////////////////////////////////////////
  //               ADD DATA
  //////////////////////////////////////////////
  addData = (dataType, data) => {
    axios.post(`${api_url}/${dataType}`, data)
      .then(newData => {
        return newData.data
      })
      .then(resData => {
        this.updateArr(dataType, resData)
      })
      .then(err => console.log(err))
  }

  updateArr = (arr, data) => {
    this.setState(prevState => {
      prevState[arr].push(data)
      return {
        [arr]: prevState[arr]
      }
    })
  }

  //////////////////////////////////////////////
  //               EDIT DATA
  //////////////////////////////////////////////
  updateData = (dataType, data) => {
    axios.put(`${api_url}/${dataType}/${data.id}`, data)
      .then(updatedData => {
        return updatedData.data
      })
      .then(resData => {
        this.getData(dataType)
      })
      .then(err => console.log(err))
  }

  componentDidMount() {
    this.getData('members')
    this.getData('tasks')
    this.getData('behaviors')
  }

  render() {
    return (
      <div>
        {this.state.childDetails ?
          <ChildDashboard
            child={this.child}
          />
          :
          <div>
            <Header
              auth={this.Auth}
              history={this.props.history}
              handleManagementOpts={this.handleManagementOpts}
            />
            <div>
              {this.state.manage === 'family-dashboard' ?
                <div>

                <ChildList
                  children={this.state.members.filter(member => member.role.includes('child'))}
                  childDetails={this.toggleChildDetails}
                />
                </div>
                : ""
              }
              {this.state.manage === 'household' ?
              <div>
                <ManageHousehold
                  handleManagementOpts={this.handleManagementOpts}
                />
              </div>
              : ""
              }
              {this.state.manage === 'tasks-behaviors' ?
                <div>
                  <ManageTBs
                    tasks={this.state.tasks}
                    behaviors={this.state.behaviors}
                    delete={this.deleteData}
                    add={this.addData}
                    update={this.updateData}
                  />
                </div>
                : ""
              }
              {this.state.manage === 'cash-ins' ?
                <div>
                  <ManageCashins/>
                </div>
                :""
              }

            </div>
          </div>
        }

      </div>

    )
  }
}

export default Dashboard
