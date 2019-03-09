import React, {Component} from 'react'

class ChildOverview extends Component {
  render() {
    return(
      <div>
        {this.props.child}
      </div>

    )
  }
}

export default ChildOverview
