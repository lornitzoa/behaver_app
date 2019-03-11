import React, { Component } from 'react'


import AddTask from './AddTask'
import AddBehavior from './AddBehavior'

let api_url = 'http://localhost:3000'

class ManageTBs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskIndex: null,
      behaviorIndex: null
    }
  }


  setEditParams = (index, dataType) => {
    this.setState({
      [dataType + 'Index']: index
    })
  }



  render() {
    return (
      <div>
        <div>
          <h2>Manage Tasks and Behaviors</h2>
          <div className='TBDashboard'>
            <div>
              <div>
                <h3>Tasks</h3>
              </div>
              <div>
                <AddTask
                    addTask={this.props.add}
                />
              </div>
              <ul>
                {this.props.tasks.map((task, index) => {
                  return (
                    <div key={index}>
                      {this.state.taskIndex === index ?
                        <li >
                          <AddTask
                            index={index}
                            task={task}
                            update={this.props.update}
                            setEditParams={this.setEditParams}
                          />
                        </li>
                        :
                        <li key={index}>
                          {task.task}
                          <button onClick={() => {
                            this.setEditParams(index, 'task')
                          }}>Edit</button>
                          <button onClick={() => {
                            this.props.delete('tasks',task.id, index)
                          }}>Delete</button>
                        </li>
                      }
                    </div>
                  )})
                }
              </ul>
            </div>
            <div>
              <div>
                <h3>Behaviors</h3>
              </div>
              <div>
                <AddBehavior
                  addBehavior={this.props.add}
                />
              </div>
              <ul>
              {this.props.behaviors.map((behavior, index) => {
                return (
                  <div key={index}>
                    {this.state.behaviorIndex === index ?
                      <li >
                        <AddBehavior
                          index={index}
                          behavior={behavior}
                          update={this.props.update}
                          setEditParams={this.setEditParams}
                        />
                      </li>
                      :
                      <li key={index}>
                        {behavior.behavior}
                        <button onClick={() => {
                          this.setEditParams(index, 'behavior')
                        }}>Edit</button>
                        <button onClick={() => {
                          this.props.delete('behaviors',behavior.id, index)
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
      </div>

    )
  }
}

export default ManageTBs
