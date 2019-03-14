import React, { Component } from 'react'
import AddCashin from './AddCashin'

class CashinList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editIndex: null
    }
  }

  gotToEdit = (index) => {
    console.log(index);
    this.setState({
      editIndex: index
    })
  }

  componentDidMount() {
    // console.log(this.props.availableCashIns);
  }

  render() {
    return (
      <div>
        Available Cashins
        <button onClick={this.props.changeView}>Make Cashin Available</button>
        <div>
          {this.props.availableCashIns.map((cashin, index) => {
            return(
              <div key={index}>
                {this.state.editIndex === index ?
                  <AddCashin
                    index={index}
                    cashin={cashin}
                    updateData={this.props.updateData}
                    cashIns={this.props.cashIns}
                    cancel={this.gotToEdit}
                    child={this.props.child}
                  />
                  :
                  <div className='items' >
                    <p>{cashin.reinforcement}</p>
                    <p>{cashin.points}</p>
                    <p>{cashin.daily_allotment}</p>
                    <p>{cashin.no_available}</p>
                    <button>Use</button>
                    <button onClick={() => {
                      this.gotToEdit(index)
                    }}>Edit</button>
                    <button onClick={() => {
                      this.props.deleteData('reinforcements/assignments', cashin.id)
                    }}>Delete</button>
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
