import React, { Component } from 'react'

class ScoreBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todaysPoints: parseInt(this.props.score[0].bx_points_earned) + parseInt(this.props.score[0].task_points_earned),
      req_tasks: this.props.tasks
    }
  }



  componentDidMount() {
    // this.printTasks()
    // console.log(this.props.score);
    // console.log(this.props.tasksassignments);
    // console.log(this.props.score.filter(score => score.date === Date.now()));
  }

  render() {

    return (
      <div className='score-board'>
        <div className='data'>
          <h2>Behavior Points</h2>
          <h3>{this.props.score[0].bx_points_earned}</h3>
        </div>
        <div className='data'>
          <h2>Required Tasks Completed</h2>
          <h3>
            {this.props.score[0].req_tasks_completed}/
            {this.props.tasksassignments.filter(task => task.required === 't').length}
           </h3>
        </div>
        <div className='data'>
          <h2>Bonus Tasks Completed</h2>
          <h3>
            {this.props.score[0].req_tasks_completed}/
            {this.props.tasksassignments.filter(task => task.required === 'f').length}
          </h3>
        </div>
        <div className='data'>
          <h2>Task Points</h2>
          <h3>{this.props.score[0].task_points_earned}</h3>
        </div>
        <div className='data'>
          <h2>Todays Earned Points</h2>
          <h3>{this.state.todaysPoints}</h3>
        </div>
        <div className='data'>
          <h2>Points Used</h2>
          <h3>{this.props.score[0].points_used}</h3>
        </div>
        <div className='data'>
          <h2>Points Available</h2>
          <h3>{this.props.score[0].points_available}</h3>
        </div>
        <div className='data'>
          <h2>Stashed Points</h2>
          <h3>{this.props.score[0].stashed_cash}</h3>
        </div>
      </div>
    )
  }

}

export default ScoreBoard
