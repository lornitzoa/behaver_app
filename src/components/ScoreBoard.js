import React, { Component } from 'react'
import PieChart from './PieChart'






class ScoreBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.req_complete = this.props.score[0].req_tasks_complete
    this.req_incomplete = this.props.score[0].req_tasks_assigned - this.props.score[0].req_tasks_complete
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
          <h1 id='h1-task'>Tasks</h1>
          <h1 id='h1-points'>Points</h1>
        </div>
        <div className='score-data-container'>
          <div className='chart-container'>
            <div>
              <h2>Required</h2>
              <PieChart
                data={[this.props.score[0].req_tasks_complete, (this.props.score[0].req_tasks_assigned - this.props.score[0].req_tasks_complete)]}
              />
            </div>
            <div>
              <h2>Bonus</h2>
              <PieChart
                data={[this.props.score[0].bonus_tasks_complete, (this.props.score[0].bonus_tasks_assigned - this.props.score[0].bonus_tasks_complete)]}
              />
            </div>
          </div>
          <div className='points-container'>
            <div className='score-data'>
              <h2>Task</h2>
              <h1>{this.props.score[0].task_points_earned}</h1>
            </div>
            <div className='score-data'>
              <h2>Behavior</h2>
              <h1>{this.props.score[0].bx_points_earned}</h1>
            </div>
            <div className='score-data'>
              <h2>Earned</h2>
              <h1>{this.props.score[0].total_points_earned}</h1>
            </div>
            <div className='score-data'>
              <h2>Used</h2>
              <h1>{this.props.score[0].points_used}</h1>
            </div>
            <div className='score-data'>
              <h2>Available</h2>
              <h1>{this.props.score[0].points_available}</h1>
            </div>
            <div className='score-data'>
              <h2>Stashed</h2>
              <h1>{this.props.score[0].stashed_cash}</h1>
            </div>
          </div>

        </div>
      </div>
    )
  }

}

export default ScoreBoard
