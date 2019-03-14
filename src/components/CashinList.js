import React, { Component } from 'react'

class CashinList extends Component {

  componentDidMount() {
    // console.log(this.state.);
  }

  render() {
    return (
      <div>
        Available Cashins
        <button onClick={this.props.changeView}>Make Cashin Available</button>
      </div>
    )
  }
}

export default CashinList
