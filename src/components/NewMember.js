import React, { Component } from 'react'
import Header from './Header'

class NewMember extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return(
      <div>

        <h3>Add new family member details</h3>
        <form>
          <label htmlFor='name'>Name</label>
          <input type='text' onChange={this.handleChange}/>
        </form>
        <button onClick={() => {
          this.props.handleOpts('addMember')
        }}>Done</button>
      </div>
    )
  }
}

export default NewMember
