import React, { Component } from 'react'
import AddCashin from './AddCashin'
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



  render() {
    return (
      <div>
        {this.state.listView ?
          <CashinList
            changeView={this.changeView}
            updateScore={this.updateScore}
            availableCashIns={this.props.availableCashIns}
            child={this.props.child}
            deleteData={this.props.deleteData}
            updateData={this.props.updateData}
            cashIns={this.props.cashIns}
          />
          :
          <AddCashin
            cashIns={this.props.cashIns}
            addData={this.props.addData}
            changeView={this.changeView}
            child={this.props.child}
          />
        }


      </div>
    )
  }
}

export default CashIns
