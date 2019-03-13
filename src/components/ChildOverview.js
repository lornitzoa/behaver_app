import React, {Component} from 'react'

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
    this.setData()

  }

  render() {
    return(
        <tbody>
        {this.state.loaded ?
              <tr
                onClick={() => {
                  this.props.goToChildDashboard(this.props.child.member_id)
                }}>
                <td className='childNameCol childName'>{this.props.child.name}</td>
                <td className='data'>{this.state.behavior_points}</td>
                <td className='data'>{this.state.tasks_completed}</td>
                <td className='data'>{this.state.task_points}</td>
                <td className='data'>{this.state.stashed_cash}</td>

              </tr>
          :
          <tr></tr>
        }
        </tbody>

    )
  }
}

export default ChildOverview
