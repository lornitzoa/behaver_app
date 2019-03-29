import React, { Component } from 'react'


import AddTask from './AddTask'
import AddBehavior from './AddBehavior'


class ManageTBs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskIndex: null,
      behaviorIndex: null
    }
  }

  // set index to item selected for editing to change view
  setEditParams = (index, dataType) => {
    this.setState({
      [dataType + 'Index']: index
    })
  }



  render() {
    return (
      <div>
        <div>
          <h1>Manage Tasks and Behaviors</h1>
          <div className='TBDashboard'>
            <div>
              <div>
                <h2>Tasks</h2>
              </div>
              <div>
                <AddTask
                    addData={this.props.addData}
                />
              </div>
              <ul>
                {console.log(this.props.tasks)}
                {this.props.tasks.map((task, index) => {
                  return (
                    <div key={index}>
                      {this.state.taskIndex === index ?
                        <li >
                          <AddTask
                            index={index}
                            task={task}
                            updateData={this.props.updateData}
                            setEditParams={this.setEditParams}
                          />
                        </li>
                        :
                        <li key={index}>
                          <div className='list-details'>
                            {task.task}
                          </div>
                          <div className='list-btns'>
                            <button onClick={() => {
                              this.setEditParams(index, 'task')
                            }}>Edit</button>
                            <button onClick={() => {
                              this.props.deleteData('tasks',task.id)
                            }}>Delete</button>
                          </div>
                        </li>
                      }
                    </div>
                  )})
                }
              </ul>
            </div>
            <div>
              <div>
                <h2>Behaviors</h2>
              </div>
              <div>
                <AddBehavior
                  addData={this.props.addData}
                />
              </div>
              <ul>
              {console.log(this.props.behaviors)}
              {this.props.behaviors.map((behavior, index) => {
                return (
                  <div key={index}>
                    {this.state.behaviorIndex === index ?
                      <li >
                        <AddBehavior
                          index={index}
                          behavior={behavior}
                          updateData={this.props.updateData}
                          setEditParams={this.setEditParams}
                        />
                      </li>
                      :
                      <li key={index}>
                        <div className='list-details'>
                          {behavior.behavior} <br/>
                          {behavior.targeted_for}
                        </div>
                        <div className='list-btns'>
                          <button onClick={() => {
                            this.setEditParams(index, 'behavior')
                          }}>Edit</button>
                          <button onClick={() => {
                            this.props.deleteData('behaviors',behavior.id)
                          }}>Delete</button>
                        </div>
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
