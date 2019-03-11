import React, { Component } from 'react'

class AddTask extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor='task'>Task</label>
          <input type='text'/>
          <input type='submit' value='Add'/>
        </form>
      </div>
    )
  }
}

export default AddTask
