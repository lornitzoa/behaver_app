import React, { Component } from 'react'


  class AddTask extends Component {
    constructor(props) {
      super(props)
      this.state = {
        type: 'new',
        task: 'Add Task',
        family_id: localStorage.getItem('family_id')
      }
    }

    checkIfEditing = () => {
      if(this.props.task) {
        this.setState({
          type: 'edit',
          task: this.props.task.task,
          family_id: this.props.task.family_id
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
          task: this.state.task,
          family_id: this.state.family_id
        }
        console.log(task);
        this.props.addData('tasks', task)
      } else if(this.state.type === 'edit') {
        let task = {
          id: this.props.task.id,
          task: this.state.task,
          family_id: this.state.family_id
        }
        console.log(task);
        this.props.setEditParams(null, 'task')
        this.props.updateData('tasks', task)

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
