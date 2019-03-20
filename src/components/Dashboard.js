import React, { Component } from 'react'
// import axios from 'axios'
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import AuthService from '../services/user.service'

// import Header from './Header'

// import ManageHousehold from './Household'
// import ManageTBs from './ManageTBs'
// import ManageCashins from './ManageCashins'

import ChildList from './ChildList'

import ChildDashboard from './ChildDashboard'


// let api_url = 'http://localhost:3000'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // // wait for data to come in
      // loaded: false,
      // // arrays for app data
      // members: [],
      // tasks: [],
      // behaviors: [],
      // tasksassignments: [],
      // behaviorsassignments:[],
      // reinforcements: [],
      // reinforcementsassignments: [],
      // scores: [],
      // // set component to be viewed
      // manage: 'family-dashboard',
      // // toggles family vs child dashboard
      childDetails: false
    }
    // this.Auth = new AuthService()
    // this.childID = null
  }

  //////////////////////////////////////////////
  //               PAGE COMPONENT HANDLING
  //////////////////////////////////////////////

  // // handles navigation of management pages
  // handleManagementOpts = (category) => {
  //   this.setState({
  //     manage: category
  //   })
  // }
  //
  // goToChildDashboard = (member_id) => {
  //   this.childID = member_id
  //   this.setState({
  //     childDetails: !this.state.childDetails
  //   })
  //   // this.child = this.state.members[memberIndex]
  // }
  //
  // //////////////////////////////////////////////
  // //               GET DATA
  // //////////////////////////////////////////////
  //
  // // get children from db and display Children in Children Overview component
  // getData = (dataType) => {
  //   axios.get(`${api_url}/${dataType}`)
  //     .then(json => json.data)
  //     .then(data => {
  //       // console.log(data);
  //         // let dataWONulls = this.removeNulls(data)
  //         let array = dataType.replace('/', '')
  //         this.setState({
  //           [array]: data
  //         })
  //
  //         if(dataType === 'scores') {
  //           this.setState({
  //             loaded: true
  //           })
  //         }
  //
  //
  //         // console.log(dataType);
  //         // console.log(data);
  //
  //     })
  // }
  //
  // removeNulls = (array) => {
  //   for(let i = 0; i < array.length; i++) {
  //     if(array[i] === null) {
  //       array.splice(i, 1)
  //     }
  //   }
  //   // console.log(array);
  // }
  //
  // //////////////////////////////////////////////
  // //               DELETE DATA
  // //////////////////////////////////////////////
  // deleteData = (dataType, id) => {
  //   // console.log(dataType);
  //   // console.log(id);
  //   axios.delete(`${api_url}/${dataType}/${id}`)
  //     .then(data => {
  //       this.getData(dataType)
  //     }).then(scores => {
  //       console.log(dataType);
  //       if(dataType === 'tasks/assignments') {
  //         this.getData('scores')
  //         console.log('getting scores');
  //       }
  //     }
  //
  //     )
  // }
  //
  // // removeFromArr = (arr, index) => {
  // //   this.setState(prevState => {
  // //     prevState[arr].splice(index, 1)
  // //     return {
  // //       [arr]: prevState[arr]
  // //     }
  // //   })
  // // }
  //
  // //////////////////////////////////////////////
  // //               ADD DATA
  // //////////////////////////////////////////////
  // addData = (dataType, data) => {
  //   // console.log(data);
  //   axios.post(`${api_url}/${dataType}`, data)
  //     .then(newData => {
  //       return newData.data
  //     })
  //     .then(resData => {
  //       // console.log(resData);
  //       this.getData(dataType)
  //       if(dataType === 'tasks/assignments') {
  //         this.getData('scores')
  //
  //       }
  //     })
  //     .then(err => console.log(err))
  // }
  //
  // // updateArr = (arr, data) => {
  // //   console.log(data);
  // //   this.setState(prevState => {
  // //     prevState[arr].push(data)
  // //     return {
  // //       [arr]: prevState[arr]
  // //     }
  // //   })
  // // }
  //
  // //////////////////////////////////////////////
  // //               EDIT DATA
  // //////////////////////////////////////////////
  // updateData = (dataType, data) => {
  //   // console.log(dataType)
  //   console.log(data)
  //   // console.log(data.id)
  //   axios.put(`${api_url}/${dataType}/${data.id}`, data)
  //     .then(updatedData => {
  //       // console.log(updatedData);
  //       return updatedData.data
  //     })
  //     .then(resData => {
  //       this.getData(dataType)
  //       if(dataType === 'tasks/assignments') {
  //         console.log('getting scores');
  //         this.getData('scores')
  //
  //       }
  //     })
  //     .then(err => console.log(err))
  // }
  //
  // componentDidMount() {
  //   this.getData('members')
  //   this.getData('tasks')
  //   this.getData('behaviors')
  //   this.getData('reinforcements')
  //   this.getData('scores')
  // }

  render() {
    return (
      <div>
        <h2>Main Dashbaord</h2>
        <ChildList
          children={this.props.children}
          goToChildDashboard={this.props.goToChildDashboard}
          scores={this.props.scores}
        />
      </div>
    )
  }
}

export default Dashboard
