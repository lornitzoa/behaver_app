import React, {Component} from 'react'

class ChildOverview extends Component {


  render() {
    return(
      <div onClick={this.props.childDetails}>
        {this.props.child.name}
      </div>
    )
  }
}

export default ChildOverview
