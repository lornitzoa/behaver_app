import React, { Component } from 'react'

class AddCashin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      child_id: this.props.child[0].member_id,
      reinforcement_id: 0,
      reinforcement: '',
      points: 0,
      daily_allotment: 0,
      no_available: 0,
      editing: false,
      btnDone: 'Done'
    }
  }

  checkIfEditing = () => {
    if(this.props.cashin) {

      let cashin = this.props.cashin
      console.log(cashin);
      this.setState({
        reinforcement_id: cashin.reinforcement_id,
        reinforcement: cashin.reinforcement,
        points: cashin.points,
        daily_allotment: cashin.daily_allotment,
        no_available: cashin.no_available,
        editing: true,
        btnDone: 'Cancel'
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.editing) {
      let updatedAssignment = {
        id: this.props.cashin.id,
        child_id: this.state.child_id,
        reinforcement_id: parseInt(this.state.reinforcement_id),
        points: parseInt(this.state.points),
        daily_allotment: parseInt(this.state.daily_allotment),
        no_available: parseInt(this.state.no_available),
      }
      console.log(updatedAssignment);
      this.props.updateData('reinforcements/assignments', updatedAssignment)
      this.props.cancel(null)
    } else {
      let updatedAssignment = {
        child_id: this.state.child_id,
        reinforcement_id: parseInt(this.state.reinforcement_id),
        points: parseInt(this.state.points),
        daily_allotment: parseInt(this.state.daily_allotment),
        no_available: parseInt(this.state.no_available),
      }
      this.props.addData('reinforcement/assignments', updatedAssignment)
      this.props.changeView()
      this.setState({
        child_id: this.props.childID,
        reinforcement_id: 0,
        reinforcement: '',
        points: 0,
        daily_allotment: 0,
        no_available: 0,
        available: Boolean,
        editing: false,
        btnDone: 'Done'
      })
    }

  }

  componentDidMount() {
    this.checkIfEditing()
    console.log(this.props.cashIns);
    console.log(this.props.child);

  }

  render() {
    return (
      <div>
        Add Cashin
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange} id="reinforcement_id" value={this.state.reinforcement_id}>
            <option value='0'>---Choose Cash In---</option>
            {this.props.cashIns.map((cashin, index) => {
              return (
                <option key={index} value={cashin.id}>{cashin.reinforcement}</option>
              )
            })}
          </select>
          <label>Value</label>
          <input type='number' id='points' value={this.state.points} onChange={this.handleChange}/>
          <label>Daily Allotment</label>
          <input type='number' onChange={this.handleChange} id='no_available' value={this.state.no_available}/>
          <input type="submit"/>
        </form>
        <button onClick={() => {
          if(this.state.editing) {
            this.props.cancel(null)
          } else {
            this.props.changeView()
          }
        }}>{this.state.btnDone}</button>
      </div>
    )
  }
}

export default AddCashin
