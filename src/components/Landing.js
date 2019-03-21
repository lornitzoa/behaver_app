import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Login from './Login'
import CreateAccount from './CreateAccount'


class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: false
    }
  }

  changeView = () => {
    this.setState({
      view: !this.state.view
    })
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

            <div>
              <Switch>
                <Route
                  path='/login'
                  component={() =>
                    <Login
                      login={this.props.login}
                      changeView={this.changeView}
                      />
                    }
                  />
                <Route
                  path='/register'
                  component={() =>
                    <CreateAccount
                      changeView={this.ChangeView}
                    />
                    }
                  />
              </Switch>
            </div>

        </div>

      </Router>
    )
  }
}

export default Index
