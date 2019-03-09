import React, { Component } from 'react'
import { Link} from 'react-router-dom'


class Index extends Component {
  
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <Link to='/login'>Log In</Link>
        <Link to='/register'>Create Family</Link>
      </div>
    )
  }
}

export default Index
