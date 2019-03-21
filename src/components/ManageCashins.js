import React, { Component } from 'react'
import AddCashin from './AddCashin'

class ManageCashins extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editIndex: null,
      reinforcement: '',
      family_id: localStorage.getItem('family_id')
    }
  }

  goToEdit = (index) => {
    this.setState({
      editIndex: index
    })
  }



  render() {
    return (
      <div>
        <AddCashin
          addData={this.props.addData}
          updateData={this.props.updateData}
          deleteData={this.props.deleteData}
        />
        <ul>
          {this.props.reinforcements.map((cashin, index) => {
            return (
              <div key={index}>
                {this.state.editIndex === index ?
                  <li>
                    <AddCashin
                      cashIn={cashin}
                      goToEdit={this.goToEdit}
                      addData={this.props.addData}
                      updateData={this.props.updateData}
                      deleteData={this.props.deleteData}
                    />
                  </li>
                  :
                  <li >
                    <div className='list-details'>
                      {cashin.reinforcement}
                    </div>
                    <div className='list-btns'>
                      <button onClick={() => {
                        this.goToEdit(index)
                      }}>Edit</button>
                      <button onClick={() => {
                        this.props.deleteData('reinforcements', cashin.id)
                      }}>Delete</button>
                    </div>
                  </li>
                }
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ManageCashins
