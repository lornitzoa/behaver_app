import React, { Component } from 'react'

class AddCashinAssignment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // data for db
      child_id: null,
      reinforcement_id: 0,
      reinforcement: '',
      points: 'Value',
      daily_allotment: 'Daily Allotment',
      no_available: 0,
      // view state of form
      editing: false

    }
  }

  // check if user is adding new data or updateing existing data
  checkIfEditing = () => {
    // if user is sending data to be edited
    if(this.props.cashin) {
      // create variable for data string
      let cashin = this.props.cashin
      // console.log(cashin);
      // set state db data to fill the form
      this.setState({
        reinforcement_id: cashin.reinforcement_id,
        reinforcement: cashin.reinforcement,
        points: cashin.points,
        daily_allotment: cashin.daily_allotment,
        no_available: cashin.no_available,
        editing: true
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
    console.log(this.state.child_id);
    // if user is editing data
    if(this.state.editing) {
      // create an object to send to updateData function with id
      let updatedAssignment = {
        id: this.props.cashin.id,
        child_id: this.state.child_id,
        reinforcement_id: parseInt(this.state.reinforcement_id),
        points: parseInt(this.state.points),
        daily_allotment: parseInt(this.state.daily_allotment),
        no_available: parseInt(this.state.daily_allotment),
        family_id: parseInt(localStorage.getItem('family_id'))
      }
      // console.log(updatedAssignment);
      // send object to updateData with route string
      this.props.updateData('reinforcements/assignments', updatedAssignment)
      // return to list view state
      this.props.cancel(null)
    } else {
      // if usesr is adding new data
      // create object to send to addData function, without id
      let newAssignment = {
        child_id: this.state.child_id,
        reinforcement_id: parseInt(this.state.reinforcement_id),
        points: parseInt(this.state.points),
        daily_allotment: parseInt(this.state.daily_allotment),
        no_available: parseInt(this.state.daily_allotment),
        family_id: parseInt(localStorage.getItem('family_id'))
      }
      // send objec to addData with route string
      this.props.addData('reinforcements/assignments', newAssignment)
      // this.props.changeView()
      // reset form for new data
      this.setState({
        child_id: this.props.childID,
        reinforcement_id: 0,
        reinforcement: '',
        points: 'Value',
        daily_allotment: 'Daily Allotment',
        no_available: 0,
        available: Boolean,
        editing: false,
        btnDone: 'Done'
      })
    }

  }

  componentDidMount() {
    // check if object data is being sent for editing.
    this.checkIfEditing()
    // console.log(this.props.cashIns);
    // console.log(this.props.child[0].member_id);
    this.setState({
      child_id: this.props.child[0].member_id
    })

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
          <input type='number' id='points' placeholder={this.state.points} value={this.state.points} onChange={this.handleChange}/>
          <input type='number' onChange={this.handleChange} placeholder={this.state.daily_allotment} id='daily_allotment' value={this.state.daily_allotment}/>
          <input type="submit"/>
        </form>
        {this.state.editing ?
          <button onClick={() => {
              this.props.cancel(null)
          }}>Cancel</button>
          :
          ""
        }

      </div>
    )
  }
}

export default AddCashinAssignment
