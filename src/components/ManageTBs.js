import React, { Component } from 'react'

import AddTask from './AddTask'
import AddBehavior from './AddBehavior'

class ManageTBs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: ['pack bag', 'feed dog', 'brush teeth'],
      behaviors: ['clean up after self', 'sharing', 'patience', 'asking without whinning'],
      type: 'view'
    }
  }

  // get all tasks
  getTasks = () => {

  }

  // and behaviors and display as list.

  // navigate to/from add task/behavior components
  addToB = (type) => {
    this.setState({
      type: type
    })
  }

  render() {
    return (
      <div>
        {this.state.type === 'view' ?
        <div>
          <h2>Manage Tasks and Behaviors</h2>
          {/*
            list of behaviors;
            button to add new behavior > new component;
            list of tasks;
            button to add new task > new component
          */}
          <div>
            <div>
              <h3>Tasks</h3>
              <button onClick={() => {
                this.addToB('task')
              }}>Add Task</button>
            </div>
            <ul>
              {this.state.tasks.map((task, index) => {
                return (
                  <li>{task}</li>
                )})
              }
            </ul>
            <div>
              <h3>Behaviors</h3>
              <button onClick={() => {
                this.addToB('behavior')
              }}>Add Behavior</button>
            </div>
            <ul>
              {this.state.behaviors.map((behavior, index) => {
                return (
                  <li>{behavior}</li>
                )})
              }
            </ul>
          </div>
        </div>
        : ""
        }
        {this.state.type === 'task' ?
          <AddTask
            addToB={this.addToB}
          />
          : ""
        }
        {this.state.type === 'behavior' ?
          <AddBehavior
            addToB={this.addToB}
          />
          : ""
        }


      </div>

    )
  }
}

export default ManageTBs
