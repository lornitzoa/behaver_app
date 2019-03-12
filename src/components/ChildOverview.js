import React, {Component} from 'react'

class ChildOverview extends Component {




  render() {
    return(
      <tbody>
        <tr
          onClick={() => {
            this.props.goToChildDashboard(this.props.child.member_id)
          }}>
          <td className='childNameCol childName'>{this.props.child.name}</td>
          <td className='data'>50</td>
          <td className='data'>3/5</td>
          <td className='data'>70</td>
          <td className='data'>100</td>
        </tr>
      </tbody>
    )
  }
}

export default ChildOverview
