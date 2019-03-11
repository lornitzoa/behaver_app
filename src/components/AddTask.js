import React, { Component } from 'react'


  class AddTask extends Component {
    constructor(props) {
      super(props)
      this.state = {
        type: 'new',
        task: 'Add Task'
      }
    }

    checkIfEditing = () => {
      if(this.props.task) {
        this.setState({
          type: 'edit',
          task: this.props.task.task
        })
      }
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      if(this.state.type === 'new') {
        let task = {
          task: this.state.task
        }
        this.props.addTask(task)
      } else if(this.state.type === 'edit') {
        let task = {
          id: this.props.task.id,
          task: this.state.task
        }
        this.props.editTask(task)
        this.props.setTaskIndex(null)
      }
    }


    componentDidMount() {
      this.checkIfEditing()
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='task'>Task</label>
            <input type='text' id='task' placeholder={this.state.task} onChange={this.handleChange}/>
            <input type='submit' value='Add'/>
          </form>
        </div>
      )
    }
  }

export default AddTask
