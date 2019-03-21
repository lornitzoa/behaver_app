import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class ChildOverview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      behavior_points: 0,
      tasks_completed: 0,
      task_points: 0,
      stashed_cash: 0
    }
  }

  // get and set data to display on score board
  setData = () => {
    let scores = this.props.scores
    if(scores.length > 0) {
      this.setState({
        behavior_points: scores[0].behavior_points,
        tasks_completed: scores[0].tasks_completed,
        task_points: scores[0].task_points,
        stashed_cash: scores[0].stashed_cash,
        loaded: true
      })
    } else {
      this.setState({
        loaded: true
      })
    }
  }

  componentDidMount() {
    // send incoming data to scoreboard
    this.setData()
    // console.log(this.props.scores);

  }

  render() {
    return(
      <Router>
        <div>

          <table>
            <thead>
              <tr colSpan='5'>
                <th>
                  <h2>Main Dashbaord</h2>
                </th>
              </tr>
              <tr>
                <th className='childNameCol'>CHILD</th>
                <th>BEHAVIOR POINTS</th>
                <th>TASKS COMPLETED</th>
                <th>DAILY SCORE</th>
                <th>STASHED CASH</th>
              </tr>
            </thead>
            <tbody>
            {
              this.props.children ? this.props.children.map((child, index) => {
                return (
                  <tr key={index} onClick={() =>
                    this.props.changeView(child.member_id)
                  }>
                    <td className='childNameCol childName'>{child.name}</td>
                    <td >{this.props.scores[0].bx_points_earned}</td>
                    <td >{this.props.scores[0].task_points_earned}</td>
                    <td >{this.props.scores[0].total_points_earned}</td>
                    <td >{this.props.scores[0].stashed_cash}</td>
                  </tr>
                )
              }
            )
              :
              ''
            }
            </tbody>
          </table>
        </div>
      </Router>
    )
  }
}

export default ChildOverview
