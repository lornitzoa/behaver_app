import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Login from './Login'
import CreateAccount from './CreateAccount'


class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <div className='landing'>
          <h1 className='welcome'>Welcome to BeHaver</h1>
          <Link to='/login' className='router-links'>
            <button>Log In</button>
            </Link>
          <Link to='/register' className='router-links'>
            <button>Create Family</button>
          </Link>
          <Switch>
            <Route
              path='/login'
              component={() =>
                <Login login={this.props.login} history={this.props.history}/>
                }
              />
            <Route
              path='/register'
              component={() =>
                <CreateAccount/>
                }
              />
            </Switch>
        </div>

      </Router>
    )
  }
}

export default Index
