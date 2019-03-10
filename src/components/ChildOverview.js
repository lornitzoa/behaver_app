import React, {Component} from 'react'

class ChildOverview extends Component {


  render() {
    return(
      <tr onClick={this.props.childDetails}>
        <td>{this.props.child.name}</td>
        <td>50</td>
        <td>3/5</td>
        <td>70</td>
        <td>100</td>
      </tr>
    )
  }
}

export default ChildOverview
