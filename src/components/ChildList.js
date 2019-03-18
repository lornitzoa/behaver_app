import React, { Component } from 'react'
import ChildOverview from './ChildOverview'

class ChildList extends Component {

  componentDidMount() {
    // console.log(this.props.scores);
  }

  render() {
    return(
      <table>
        <thead>
          <tr>
            <th className='childNameCol'>CHILD</th>
            <th>BEHAVIOR POINTS</th>
            <th>TASKS COMPLETED</th>
            <th>DAILY SCORE</th>
            <th>STASHED CASH</th>
          </tr>
        </thead>
        {
          this.props.children ? this.props.children.map((child, index) => {
            return (

              <ChildOverview
                child={child}
                scores={this.props.scores.filter(score => score.member_id === child.member_id)}
                key={index}
                index={index}
                goToChildDashboard={this.props.goToChildDashboard}
              />
            )
          })
          :
          ''
        }
      </table>

    )
  }
}

export default ChildList
