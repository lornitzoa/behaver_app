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
            availableCashIns={this.props.reinforcementsassignments}
            childID={this.props.childID}
            deleteData={this.props.deleteData}
            updateData={this.props.updateData}

          />
          :
          <AddCashin
            cashIns={this.props.cashIns}
            addData={this.props.addData}
            changeView={this.changeView}
          />
        }


      </div>
    )
  }
}

export default CashIns
