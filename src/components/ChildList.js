import React, { Component } from 'react'
import ChildOverview from './ChildOverview'

class ChildList extends Component {


  render() {
    return(
      <table>
        <thead>
          <tr>
            <th className='childNameCol'>CHILD</th>
            <th className='data'>BEHAVIOR POINTS</th>
            <th className='data'>TASKS COMPLETED</th>
            <th className='data'>DAILY SCORE</th>
            <th className='data'>WEEKLY SCORE</th>
          </tr>
        </thead>
        {
          this.props.children ? this.props.children.map((child, index) => {
            return (

              <ChildOverview
                child={child}
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
