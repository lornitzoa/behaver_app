import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom'
// import { PrivateRoute } from './components/PrivateRoute'
import './App.css';

import Landing from './components/Landing'
import Main from './components/Main'
// import Dashboard from './components/Dashboard'
// import Login from './components/Login'
// import CreateAccount from './components/CreateAccount'

import AuthService from './services/user.service'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: false
    }
    this.Auth = new AuthService()
  }

  login = (username, password) => {
    console.log(username)
    this.Auth.login(username, password)
      .then(res => {
        this.setState({
          auth: true
        })

      },
      err => console.log(err)
      )
  }

  logout = () => {
    this.Auth.logout()
    this.setState({
      auth: false
    })
  }

  componentDidMount() {
    if(localStorage.getItem('id_token')) {
      this.setState({
        auth: true
      })
    }
  }

  render() {
    return (
      <Router>
        <div>
          {this.state.auth ?
            <Route
              to='/'
              render={() =>
                <Main
                  logout={this.logout}
                  auth={this.state.auth}
                />
              }
            />
            :
            <Route
              to='/landing'
              render={() =>
                <Landing login={this.login}/>
              }

            />
          }
        </div>
      </Router>
    );
  }
}

export default App;
