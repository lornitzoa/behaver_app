import React, { Component } from 'react'
import AddCashinAssignment from './AddCashinAssignment'
import CashinList from './CashinList'

class CashIns extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listView: true
    }
  }

  // handle which component is being used
  changeView = () => {
    this.setState({
      listView: !this.state.listView
    })
  }

  componentDidMount() {
    console.log(this.props.availablePoints);
  }

  render() {
    return (
      <div>
        <h2>Available Cashins</h2>
        <AddCashinAssignment
          cashIns={this.props.cashIns}
          addData={this.props.addData}
          changeView={this.changeView}
          child={this.props.child}
        />
        <CashinList
          changeView={this.changeView}
          updateScore={this.props.updateScore}
          availableCashIns={this.props.availableCashIns}
          child={this.props.child}
          deleteData={this.props.deleteData}
          updateData={this.props.updateData}
          cashIns={this.props.cashIns}
          availablePoints={this.props.availablePoints}
        />

      </div>
    )
  }
}

export default CashIns
