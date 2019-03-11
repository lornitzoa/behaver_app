import React, { Component } from 'react'

class AddBehavior extends Component {
  render() {
    return (
      <div>
        ADD BEHAVIOR
        <button onClick={() => {
          this.props.addToB('view')
        }}>Cancel</button>
      </div>
    )
  }
}

export default AddBehavior
