import React, { Component } from 'react'

import AddTask from './AddTask'
import AddBehavior from './AddBehavior'

let api_url = 'http://localhost:3000'

class ManageTBs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: ['pack bag', 'feed dog', 'brush teeth'],
      behaviors: []
    }
  }

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
        this.updateArray(jData, 'behaviors')
      })
      .then(err => console.log(err))
  }

  updateArray = (item, array) => {
    this.setState( prevState => {
      prevState[array].push(item)
      return {
        [array]: prevState[array]
      }
    })
  }



  componentDidMount() {
    this.getBehaviors()
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

                />
            </div>
            <ul>
              {this.state.tasks.map((task, index) => {
                return (
                  <li key={index}>{task}</li>
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
                <li key={index}>{behavior.behavior}</li>
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
