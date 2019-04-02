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
        this.props.addData('tasks', task)
        this.setState({
          task: 'Add Task'
        })
      } else if(this.state.type === 'edit') {
        let task = {
          id: this.props.task.id,
          task: this.state.task,
          family_id: this.state.family_id
        }
        this.props.setEditParams(null, 'task')
        this.props.updateData('tasks', task)
        this.setState({
          task: 'Add Task'
        })
      }
    }


    componentDidMount() {
      this.checkIfEditing()
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type='text' id='task' placeholder={this.state.task} onChange={this.handleChange}/>
            <input type='submit' value='Add'/>
            {this.state.type === 'edit' ?
              <button onClick={() => {
                this.props.setEditParams(null, 'task')
              }}>Cancel</button>
              :
              ""
            }
          </form>
        </div>
      )
    }
  }

export default AddTask
