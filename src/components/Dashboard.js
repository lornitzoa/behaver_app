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
      childName: 'Gus',
      manageHousehold: false
    }

    this.Auth = new AuthService()
  }

  toggleManageHousehold = () => {
    console.log(this.state.manageHousehold);
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
                <ManageHousehold/>
              </div>
              :
              <div>
                {/* Show child overviews*/}
              </div>

            }
          </div>

        <div>
          <ChildOverview
            child={this.childName}
          />
        </div>




      </div>

    )
  }
}

export default Dashboard
