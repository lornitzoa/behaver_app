import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, NavLink, Link, Switch} from 'react-router-dom'

import Header from './Header'
import Dashboard from './Dashboard'
import ManageHousehold from './Household'
import ManageTBs from './ManageTBs'
import ManageCashins from './ManageCashins'

import AuthService from '../services/user.service'



let api_url = 'https://behaver-api.herokuapp.com'


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // wait for data to come in
      loaded: false,
      familyName: '',
      // arrays for app data
      members: [],
      tasks: [],
      behaviors: [],
      tasksassignments: [],
      behaviorsassignments:[],
      reinforcements: [],
      reinforcementsassignments: [],
      scores: [],
      // set component to be viewed
      manage: 'family-dashboard'
    }
    this.Auth = new AuthService()
    this.childID = null
    this.familyID = localStorage.getItem('family_id')
  }

  // logout functionality
  handleLogout = () => {
    this.props.logout()
  }

  // Get family name from local storge to display in header
  getFamilyName = () => {
    let familyName = localStorage.username
    this.setState({
      familyName: familyName.charAt(0).toUpperCase() + familyName.slice(1)
    })
  }


  //////////////////////////////////////////////
  //               GET DATA
  //////////////////////////////////////////////

  // get children from db and display Children in Children Overview component
  getData = (dataType) => {
    axios.get(`${api_url}/${dataType}/${this.familyID}`)
      .then(json => json.data)
      .then(data => {
          let array = dataType.replace('/', '')
          this.setState({
            [array]: data
          })

          if(dataType === 'scores') {
            this.setState({
              loaded: true
            })
          }



          // console.log(dataType);
          // console.log(data);

      })
  }

  //////////////////////////////////////////////
  //               DELETE DATA
  //////////////////////////////////////////////
  deleteData = (dataType, id) => {
    console.log(dataType);
    console.log(id);
    axios.delete(`${api_url}/${dataType}/${id}`)
      .then(data => {
        this.getData(dataType)
      }).then(scores => {
        console.log(dataType);
        if(dataType === 'tasks/assignments') {
          this.getData('scores')
          // console.log('getting scores');
        }
      }

      )
  }

  //////////////////////////////////////////////
  //               ADD DATA
  //////////////////////////////////////////////
  addData = (dataType, data) => {
    // console.log(data);
    axios.post(`${api_url}/${dataType}`, data)
      .then(newData => {
        // console.log(newData.data)
        return newData.data
      })
      .then(resData => {
        // console.log(resData);
        this.getData(dataType)
        if(dataType === 'tasks/assignments') {
          this.getData('scores')

        }
      })
      .then(err => console.log(err))
  }

  //////////////////////////////////////////////
  //               EDIT DATA
  //////////////////////////////////////////////
  updateData = (dataType, data) => {
    console.log(dataType)
    console.log(data.id)
    if(dataType === 'members') {
      axios.put(`${api_url}/${dataType}/${data.member_id}`, data)
        .then(updatedData => {
          // console.log(updatedData);
          return updatedData.data
        })
        .then(resData => {
          this.getData(dataType)
          if(dataType === 'tasks/assignments') {

            this.getData('scores')

          }
        })
        .then(err => console.log(err))
    } else {
      axios.put(`${api_url}/${dataType}/${data.id}`, data)
        .then(updatedData => {
          // console.log(updatedData);
          return updatedData.data
        })
        .then(resData => {
          this.getData(dataType)
          if(dataType === 'tasks/assignments') {

            this.getData('scores')

          }
        })
        .then(err => console.log(err))
    }

  }

  componentDidMount() {
    this.getData('members')
    this.getData('tasks')
    this.getData('behaviors')
    this.getData('reinforcements')
    // this.getData('tasks/assignments')
    // this.getData('reinforcements/assignments')
    // this.getData('behaviors/assignments')
    this.getData('scores')
    this.getFamilyName()
  }

  render() {
    return (
      <Router>
        {this.state.loaded ?
          <div className='header'>
            <div className='header-titles'>
              <h1 id='h1-header'>{this.state.familyName} Family Dashboard</h1>
              <Link to='/login'><button onClick={this.handleLogout}>Log Out</button></Link>
            </div>
            <div className='nav-management'>
              <NavLink exact to='/dashboard'>
                <button>Main Dashbaord</button>
              </NavLink>
              <NavLink exact to='/household'>
                <button>Manage Household</button>
              </NavLink>

              <NavLink exact to='/manage-tbs'>
                <button>Manage Tasks & Behaviors</button>
              </NavLink>
              <NavLink exact to='/manage-cashins'>
                <button>Manage Cash Ins</button>
              </NavLink>
            </div>
            <Switch>
              <Route
                path='/dashboard'
                render={() =>
                  <Dashboard
                    children={this.state.members.filter(member => member.role.includes('child'))}
                    familyID={this.familyID}
                    goToChildDashboard={this.goToChildDashboard}
                    scores={this.state.scores}
                    getData={this.getData}
                    addData={this.addData}
                    deleteData={this.deleteData}
                    updateData={this.updateData}
                    tasks={this.state.tasks}
                    behaviors={this.state.behaviors}
                    reinforcements={this.state.reinforcements}
                    tasksassignments={this.state.tasksassignments}
                    behaviorsassignments={this.state.behaviorsassignments}
                    reinforcementsassignments={this.state.reinforcementsassignments}
                  />
                }
              />
              <Route
                path='/household'
                render={() =>
                  <ManageHousehold
                    getData={this.getData}
                    addData={this.addData}
                    deleteData={this.deleteData}
                    updateData={this.updateData}
                    members={this.state.members}
                  />
                }
              />
              <Route
                path='/manage-tbs'
                render={() =>
                  <ManageTBs
                    addData={this.addData}
                    deleteData={this.deleteData}
                    updateData={this.updateData}
                    tasks={this.state.tasks}
                    behaviors={this.state.behaviors}
                  />
                }
              />
              <Route
                path='/manage-cashins'
                render={() =>
                  <ManageCashins
                    getData={this.getData}
                    addData={this.addData}
                    deleteData={this.deleteData}
                    updateData={this.updateData}
                    reinforcements={this.state.reinforcements}
                  />
                }
              />
            </Switch>

          </div>
          :
          <h2>Not Loaded</h2>

        }

      </Router>
    )
  }

}

export default Main
