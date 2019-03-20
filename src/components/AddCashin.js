import React, { Component } from 'react'

class AddCashin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      reinforcement: 'Add Cash In'
    }
  }

  checkIfEditing = () => {
    if(this.props.cashIn) {
      this.setState({
        editing: true,
        reinforcement: this.props.cashIn.reinforcement
      })
    }
  }

  // handle form input change
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  // handle form submission
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.editing) {
      // create object to send to updateData, with id
      let cashIn = {
        id: this.props.cashIn.id,
        reinforcement: this.state.reinforcement,
        family_id: parseInt(localStorage.getItem('family_id'))
      }
      this.props.updateData('reinforcements', cashIn)
      this.props.goToEdit(null)
    } else {
      let cashIn = {
        reinforcement: this.state.reinforcement,
        family_id: parseInt(localStorage.getItem('family_id'))
      }
      this.props.addData('reinforcements', cashIn)
      this.setState({
        editing: false,
        reinforcement: ''
      })
    }
  }

  componentDidMount() {
    this.checkIfEditing()
    console.log(this.props.cashIn);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>

          <input type='text' id='reinforcement' placeholder={this.state.reinforcement} value={this.state.reinforcement} onChange={this.handleChange}/>
          <input type='submit'/>
        </form>
        {this.state.editing ?
          <button onClick={() => {
            this.props.goToEdit(null)
          }}>Cancel</button>
          :
          ""
        }
      </div>
    )
  }


}


export default AddCashin
