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

  componentDidMount() {
    console.log(this.props.reinforcements);
  }

  render() {
    return (
      <div>
        <AddCashin
          addData={this.props.addData}
          updateData={this.props.updateData}
          deleteData={this.props.deleteData}
        />
        <div>
          {this.props.reinforcements.map((cashin, index) => {
            return (
              <div key={index}>
                {this.state.editIndex === index ?
                  <div>
                    <AddCashin
                      cashIn={cashin}
                      goToEdit={this.goToEdit}
                      addData={this.props.addData}
                      updateData={this.props.updateData}
                      deleteData={this.props.deleteData}
                    />
                  </div>
                  :
                  <div className='items'>
                    {cashin.reinforcement}
                    <button onClick={() => {
                      this.goToEdit(index)
                    }}>Edit</button>
                    <button onClick={() => {
                      this.props.deleteData('reinforcements', cashin.id)
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

export default ManageCashins
