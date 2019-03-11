import React, { Component } from 'react'

import AddTask from './AddTask'
import AddBehavior from './AddBehavior'

let api_url = 'http://localhost:3000'

class ManageTBs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      behaviors: [],
      behaviorIndex: null
    }
  }

  //////////////////////////////////////////
  ///     BEHAVIOR HANDLING
  /////////////////////////////////////////

  // get all behaviors
  getBehaviors = (behavior) => {
    fetch(`${api_url}/behaviors`)
      .then(data => data.json())
      .then(jData => {
        this.setState({
          behaviors: jData
        })
      })
  }

  // and behaviors and display as list.
  addBehavior = (behavior) => {
    fetch(`${api_url}/behaviors`,
      {
        body: JSON.stringify(behavior),
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(createdBehavior => {
        return createdBehavior.json()
        }
      )
      .then(jData => {
        this.updateArr(jData, 'behaviors')
      })
      .then(err => console.log(err))
  }

  // delete behavior
  deleteBehavior = (behaviorID, arrIndex) => {
    fetch(`${api_url}/behaviors/${behaviorID}`,
      {
        method: 'DELETE'
      })
      .then(data => {
        this.removeFromArr(arrIndex, 'behaviors')
      })
      .catch(err => console.log(err))
  }

  // edit behavior
  editBehavior = (behavior) => {
    fetch(`${api_url}/behaviors/${behavior.id}`,
      {
        body: JSON.stringify(behavior),
        method: 'PUT',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(updatedBehavior => {
        return updatedBehavior.json()
      })
      .then(jData => {
        console.log(jData)
        this.getBehaviors()
      })
      .then(err => console.log(err))
  }


  //////////////////////////////////////////
  ///     TASK HANDLING
  /////////////////////////////////////////

  // get all tasks
  getTasks = (behavior) => {
    fetch(`${api_url}/tasks`)
      .then(data => data.json())
      .then(jData => {
        this.setState({
          tasks: jData
        })
      })
  }


  // add new task
  addTask = (task) => {
    fetch(`${api_url}/tasks`,
      {
        body: JSON.stringify(task),
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(createdTask => {
        return createdTask.json()
        }
      )
      .then(jData => {
        // console.log(jData)
        this.updateArr(jData, 'tasks')
      })
      .then(err => console.log(err))
  }


  // delete task
  deleteTask = (taskID, arrIndex) => {
    fetch(`${api_url}/tasks/${taskID}`,
      {
        method: 'DELETE'
      })
      .then(data => {
        this.removeFromArr(arrIndex, 'tasks')
      })
      .catch(err => console.log(err))
  }

  // edit task
  editTask = (task) => {
    fetch(`${api_url}/tasks/${task.id}`,
      {
        body: JSON.stringify(task),
        method: 'PUT',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(updatedTask => {
        return updatedTask.json()
      })
      .then(jData => {
        console.log(jData)
        this.getTasks()
      })
      .then(err => console.log(err))
  }




  //////////////////////////////////////////
  ///     ARRAY HANDLING
  /////////////////////////////////////////

  updateArr = (item, arr) => {
    this.setState( prevState => {
      prevState[arr].push(item)
      return {
        [arr]: prevState[arr]
      }
    })
  }

  removeFromArr = (arrIndex, arr) => {
    this.setState(prevState => {
      prevState[arr].splice(arrIndex, 1)
      return {
        [arr]: prevState[arr]
      }
    })
  }

  setBehaviorIndex = (index) => {
    this.setState({
      behaviorIndex: index
    })
  }





  componentDidMount() {
    this.getBehaviors()
    this.getTasks()
  }


  render() {
    return (
      <div>
        <div>
          <h2>Manage Tasks and Behaviors</h2>
          <div>
            <div>
              <h3>Tasks</h3>
            </div>
            <div>
              <AddTask
                  addTask={this.addTask}
              />
            </div>
            <ul>
              {this.state.tasks.map((task, index) => {
                return (
                  <div key={index}>
                    {this.state.behaviorIndex === index ?
                      <li >
                        <AddTask
                          index={index}
                          task={task}
                          editTask={this.editTask}
                          setTaskIndex={this.setTaskIndex}
                        />
                      </li>
                      :
                      <li key={index}>
                        {task.task}
                        <button onClick={() => {
                          this.setTaskIndex(index)
                        }}>Edit</button>
                        <button onClick={() => {
                          this.deleteTask(task.id, index)
                        }}>Delete</button>
                      </li>
                    }
                  </div>
                )})
              }
            </ul>
            <div>
              <h3>Behaviors</h3>
            </div>
            <div>
              <AddBehavior
                addBehavior={this.addBehavior}
              />
            </div>
            <ul>
            {this.state.behaviors.map((behavior, index) => {
              return (
                <div key={index}>
                  {this.state.behaviorIndex === index ?
                    <li >
                      <AddBehavior
                        index={index}
                        behavior={behavior}
                        editBehavior={this.editBehavior}
                        setBehaviorIndex={this.setBehaviorIndex}
                      />
                    </li>
                    :
                    <li key={index}>
                      {behavior.behavior}
                      <button onClick={() => {
                        this.setBehaviorIndex(index)
                      }}>Edit</button>
                      <button onClick={() => {
                        this.deleteBehavior(behavior.id, index)
                      }}>Delete</button>
                    </li>
                  }
                </div>
              )})
            }
            </ul>
          </div>
        </div>
      </div>

    )
  }
}

export default ManageTBs
