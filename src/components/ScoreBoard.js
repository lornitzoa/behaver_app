import React, { Component } from 'react'

class ScoreBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  componentDidMount() {
    // this.printTasks()
    // console.log(this.props.score);
    // console.log(this.props.tasksassignments);
    // console.log(this.props.tasksassignments);
    // console.log(this.props.score.filter(score => score.date === Date.now()));
  }

  render() {

    return (
      <div className='score-board'>
        <div className='score-super-header'>
          <h1>Tasks</h1>
          <h1>Points</h1>
        </div>
        <div className='score-data-container'>
          <div className='score-data'>
            <h2>Required</h2>
            <h3>
              {this.props.score[0].req_tasks_complete}/
              {this.props.score[0].req_tasks_assigned}
            </h3>
          </div>
          <div className='score-data'>
            <h2>Bonus</h2>
            <h3>
              {this.props.score[0].bonus_tasks_complete}/
              {this.props.score[0].bonus_tasks_assigned}
            </h3>
          </div>
          <div className='score-data'>
            <h2>Task</h2>
            <h3>{this.props.score[0].task_points_earned}</h3>
          </div>
          <div className='score-data'>
            <h2>Behavior</h2>
            <h3>{this.props.score[0].bx_points_earned}</h3>
          </div>
          <div className='score-data'>
            <h2>Earned</h2>
            <h3>{this.props.score[0].total_points_earned}</h3>
          </div>
          <div className='score-data'>
            <h2>Used</h2>
            <h3>{this.props.score[0].points_used}</h3>
          </div>
          <div className='score-data'>
            <h2>Available</h2>
            <h3>{this.props.score[0].points_available}</h3>
          </div>
          <div className='score-data'>
            <h2>Stashed</h2>
            <h3>{this.props.score[0].stashed_cash}</h3>
          </div>
        </div>
      </div>
    )
  }

}

export default ScoreBoard
