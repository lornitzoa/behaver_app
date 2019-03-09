import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AuthService from '../services/user.service'
import ManageHousehold from './Household'
import ChildOverview from './ChildOverview'


import Header from './Header'


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      children: ['Gus', 'Mack', 'Edie'],
      manageHousehold: false
    }

    this.Auth = new AuthService()
  }

  toggleManageHousehold = () => {
    this.setState({
      manageHousehold: !this.state.manageHousehold
    })

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
                this.state.children ? this.state.children.map((child, index) => {
                  return (
                    <ChildOverview child={child} key={index}/>
                  )
                })
                :
                ''
              }
              {/* Show child overviews*/}
            </div>

          }
        </div>
      </div>

    )
  }
}

export default Dashboard
