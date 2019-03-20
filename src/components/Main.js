import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, NavLink, Link, Switch} from 'react-router-dom'

import Header from './Header'
import Dashboard from './Dashboard'
import ManageHousehold from './Household'
import ManageTBs from './ManageTBs'
import ManageCashins from './ManageCashins'

import AuthService from '../services/user.service'


let api_url = 'http://localhost:3000'

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
  }

  // logout functionality
  handleLogout = () => {
    this.props.logout()
    // history.replace('/login')
    // this.props.authStatus(false)
    // return <Redirect to='/'/>
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
    axios.get(`${api_url}/${dataType}`)
      .then(json => json.data)
      .then(data => {
        // console.log(data);
          // let dataWONulls = this.removeNulls(data)
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

  removeNulls = (array) => {
    for(let i = 0; i < array.length; i++) {
      if(array[i] === null) {
        array.splice(i, 1)
      }
    }
    // console.log(array);
  }

  //////////////////////////////////////////////
  //               DELETE DATA
  //////////////////////////////////////////////
  deleteData = (dataType, id) => {
    // console.log(dataType);
    // console.log(id);
    axios.delete(`${api_url}/${dataType}/${id}`)
      .then(data => {
        this.getData(dataType)
      }).then(scores => {
        console.log(dataType);
        if(dataType === 'tasks/assignments') {
          this.getData('scores')
          console.log('getting scores');
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
    // console.log(dataType)
    console.log(data)
    // console.log(data.id)
    axios.put(`${api_url}/${dataType}/${data.id}`, data)
      .then(updatedData => {
        // console.log(updatedData);
        return updatedData.data
      })
      .then(resData => {
        this.getData(dataType)
        if(dataType === 'tasks/assignments') {
          console.log('getting scores');
          this.getData('scores')

        }
      })
      .then(err => console.log(err))
  }

  componentDidMount() {
    this.getData('members')
    this.getData('tasks')
    this.getData('behaviors')
    this.getData('reinforcements')
    this.getData('scores')
    this.getFamilyName()
  }

  render() {
    return (
      <Router>
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
              component={() =>
                <Dashboard
                  children={this.state.members.filter(member => member.role.includes('child'))}
                  goToChildDashboard={this.goToChildDashboard}
                  scores={this.state.scores}
                  child={this.state.members.filter(member => member.member_id === this.childID)}
                  getData={this.getData}
                  addData={this.addData}
                  deleteData={this.deleteData}
                  updateData={this.updateData}
                  tasks={this.state.tasks}
                  behaviors={this.state.behaviors}
                  reinforcements={this.state.reinforcements}
                  tasksassignments={this.state.tasksassignments.filter(task => task.child_id === this.childID)}
                  behaviorsassignments={this.state.behaviorsassignments.filter(task => task.child_id === this.childID)}
                  reinforcementsassignments={this.state.reinforcementsassignments}
                />
              }
            />
            <Route
              path='/household'
              component={ManageHousehold}
            />
            <Route
              path='/manage-tbs'
              component={ManageTBs}
            />
            <Route
              path='/manage-cashins'
              component={ManageCashins}
            />
          </Switch>

        </div>
      </Router>
    )
  }

}

export default Main
