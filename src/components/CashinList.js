import React, { Component } from 'react'
import AddCashinAssignment from './AddCashinAssignment'

class CashinList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editIndex: null
    }
  }

  // handle whether item is in view or edit state
  gotToEdit = (index) => {
    this.setState({
      editIndex: index
    })
  }

  handleCashIn = (cashin) => {
    console.log(cashin)
    let updateData = {
      points_used: cashin.points
    }
    console.log(updateData);
    this.props.updateScore(cashin.child_id, updateData)
    let updateNoAvailable = {
      id: cashin.id,
      child_id: cashin.child_id,
      reinforcement_id: parseInt(cashin.reinforcement_id),
      points: parseInt(cashin.points),
      daily_allotment: parseInt(cashin.daily_allotment),
      no_available: parseInt(cashin.no_available) - 1,
    }
    this.props.updateData('reinforcements/assignments', updateNoAvailable)
  }

  componentDidMount() {
    // console.log(this.props.availablePoints);
  }

  render() {
    return (
      <div>

        <div>
          {this.props.availableCashIns.map((cashin, index) => {
            return(
              <div key={index}>
                {this.state.editIndex === index ?
                  <AddCashinAssignment
                    index={index}
                    cashin={cashin}
                    updateData={this.props.updateData}
                    cashIns={this.props.cashIns}
                    cancel={this.gotToEdit}
                    child={this.props.child}
                  />
                  :
                  <div className='items' >
                    <div className='data'>
                      <p>{cashin.reinforcement}</p>
                      <p>{cashin.points}</p>
                      <p>{cashin.daily_allotment}</p>
                      <p>{cashin.no_available}</p>
                    </div>
                    <div className='list-buttons'>
                      <button onClick={() => {
                        this.handleCashIn(cashin)
                      }}>Use</button>
                      <button onClick={() => {
                        this.gotToEdit(index)
                      }}>Edit</button>
                      <button onClick={() => {
                        this.props.deleteData('reinforcements/assignments', cashin.id)
                      }}>Delete</button>
                    </div>
                  </div>
                }
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default CashinList
