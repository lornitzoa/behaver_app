import React, { Component } from 'react'
import Header from './Header'

class NewMember extends Component {
  render() {
    return(
      <div>
        <Header/>
        <h3>Add new family member details</h3>
        <form>
          <label htmlFor='name'>Name</label>
          <input type='text' onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default NewMember
