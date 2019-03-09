import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
// import { PrivateRoute } from './components/PrivateRoute'
import './App.css';

import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'



class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={Landing}/>
          <Route path='/dashboard' exact component={Dashboard}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={CreateAccount}/>
        </div>
      </Router>
    );
  }
}

export default App;
