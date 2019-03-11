import React, { Component } from 'react'

class AddTask extends Component {
  render() {
    return (
      <div>
        ADD TASK
        <button onClick={() => {
          this.props.addToB('view')
        }}>Cancel</button>
      </div>
    )
  }
}

export default AddTask
