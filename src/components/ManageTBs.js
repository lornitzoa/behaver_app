import React, { Component } from 'react'

class ManageTBs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: ['pack bag', 'feed dog', 'brush teeth'],
      behaviors: ['clean up after self', 'sharing', 'patience', 'asking without whinning'],
      addNew: 'none'
    }
  }

  // get all tasks
  getTasks = () => {

  }

  // and behaviors and display as list.




  render() {
    return (
      <div>
        <h2>Manage Tasks and Behaviors</h2>
        {/*
          list of behaviors;
          button to add new behavior > new component;
          list of tasks;
          button to add new task > new component
        */}
        <div>
          <ul>
            {this.state.tasks.map((task, index) => {
              return (
                <li>{task}</li>
              )})
            }
          </ul>
          <ul>
            {this.state.behaviors.map((behavior, index) => {
              return (
                <li>{behavior}</li>
              )})
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default ManageTBs
