import React, { Component } from 'react'
import AddBehaviorAssignment from './AddBehaviorAssignment'

class BehaviorList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editIndex: null
    }
  }

  // set index of item selected for editing
  goToEdit = (index) => {
    this.setState({
      editIndex: index
    })
  }

  // componentDidMount() {
  //   // console.log(this.props.behaviorsassignments);
  // }

  render() {
    return (
      <div>
        Behaviors
        <button onClick={() => {
          this.props.changeSheetTo('assign-behavior')
        }}>Assign Behavior</button>
        <div className='list-headers'>
          <h3 className='list-title-header'>Behaviors</h3>
          <h3 className='list-data-header'>Target</h3>
          <h3 className='list-data-header'>Points</h3>
          <span></span>
        </div>
          {this.props.behaviorsassignments.map((behavior, index) => {
            return (
              <div key={index}>
                {this.state.editIndex === index ?
                  <div>
                    <AddBehaviorAssignment
                      index={index}
                      behavior={behavior}
                      updateData={this.props.updateData}
                      behaviors={this.props.behaviors}
                      cancel={this.goToEdit}
                    />
                  </div>

                  :
                  <div className='items'>
                    <div className='data'>
                      <h4>{behavior.behavior}</h4>
                      <p>{behavior.targeted_for}</p>
                      <p>{behavior.points}</p>
                    </div>
                    <div className='list-buttons'>
                      <i className="fas fa-plus-circle fa-2x"  onClick={() => {
                        console.log('clicked');
                      }}></i>
                      <button onClick={() => {
                        this.goToEdit(index)
                      }}>Edit</button>
                      <button onClick={() => {
                        this.props.deleteData('behaviors/assignments', behavior.id)
                      }}>Delete</button>
                    </div>
                  </div>
                }
            </div>
            )
          })}

      </div>

    )
  }

}

export default BehaviorList
