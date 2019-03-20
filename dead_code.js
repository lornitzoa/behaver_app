
// REMOVED FROM DASHBOARD AFTER REARRANGING TO MAIN.JS


  //////////////////////////////////////////////
  //               PAGE COMPONENT HANDLING
  //////////////////////////////////////////////

  // // handles navigation of management pages
  // handleManagementOpts = (category) => {
  //   this.setState({
  //     manage: category
  //   })
  // }
  //
  // goToChildDashboard = (member_id) => {
  //   this.childID = member_id
  //   this.setState({
  //     childDetails: !this.state.childDetails
  //   })
  //   // this.child = this.state.members[memberIndex]
  // }
  //
  // //////////////////////////////////////////////
  // //               GET DATA
  // //////////////////////////////////////////////
  //
  // // get children from db and display Children in Children Overview component
  // getData = (dataType) => {
  //   axios.get(`${api_url}/${dataType}`)
  //     .then(json => json.data)
  //     .then(data => {
  //       // console.log(data);
  //         // let dataWONulls = this.removeNulls(data)
  //         let array = dataType.replace('/', '')
  //         this.setState({
  //           [array]: data
  //         })
  //
  //         if(dataType === 'scores') {
  //           this.setState({
  //             loaded: true
  //           })
  //         }
  //
  //
  //         // console.log(dataType);
  //         // console.log(data);
  //
  //     })
  // }
  //
  // removeNulls = (array) => {
  //   for(let i = 0; i < array.length; i++) {
  //     if(array[i] === null) {
  //       array.splice(i, 1)
  //     }
  //   }
  //   // console.log(array);
  // }
  //
  // //////////////////////////////////////////////
  // //               DELETE DATA
  // //////////////////////////////////////////////
  // deleteData = (dataType, id) => {
  //   // console.log(dataType);
  //   // console.log(id);
  //   axios.delete(`${api_url}/${dataType}/${id}`)
  //     .then(data => {
  //       this.getData(dataType)
  //     }).then(scores => {
  //       console.log(dataType);
  //       if(dataType === 'tasks/assignments') {
  //         this.getData('scores')
  //         console.log('getting scores');
  //       }
  //     }
  //
  //     )
  // }
  //
  // // removeFromArr = (arr, index) => {
  // //   this.setState(prevState => {
  // //     prevState[arr].splice(index, 1)
  // //     return {
  // //       [arr]: prevState[arr]
  // //     }
  // //   })
  // // }
  //
  // //////////////////////////////////////////////
  // //               ADD DATA
  // //////////////////////////////////////////////
  // addData = (dataType, data) => {
  //   // console.log(data);
  //   axios.post(`${api_url}/${dataType}`, data)
  //     .then(newData => {
  //       return newData.data
  //     })
  //     .then(resData => {
  //       // console.log(resData);
  //       this.getData(dataType)
  //       if(dataType === 'tasks/assignments') {
  //         this.getData('scores')
  //
  //       }
  //     })
  //     .then(err => console.log(err))
  // }
  //
  // // updateArr = (arr, data) => {
  // //   console.log(data);
  // //   this.setState(prevState => {
  // //     prevState[arr].push(data)
  // //     return {
  // //       [arr]: prevState[arr]
  // //     }
  // //   })
  // // }
  //
  // //////////////////////////////////////////////
  // //               EDIT DATA
  // //////////////////////////////////////////////
  // updateData = (dataType, data) => {
  //   // console.log(dataType)
  //   console.log(data)
  //   // console.log(data.id)
  //   axios.put(`${api_url}/${dataType}/${data.id}`, data)
  //     .then(updatedData => {
  //       // console.log(updatedData);
  //       return updatedData.data
  //     })
  //     .then(resData => {
  //       this.getData(dataType)
  //       if(dataType === 'tasks/assignments') {
  //         console.log('getting scores');
  //         this.getData('scores')
  //
  //       }
  //     })
  //     .then(err => console.log(err))
  // }
  //
  // componentDidMount() {
  //   this.getData('members')
  //   this.getData('tasks')
  //   this.getData('behaviors')
  //   this.getData('reinforcements')
  //   this.getData('scores')
  // }



// SCORE OBJECTS
date: this.score.date,
member_id: this.score.member_id,
bx_points_earned: this.score.bx_points_earned,
req_tasks_complete: this.score.req_tasks_complete,
req_tasks_assigned: this.score.req_tasks_assigned,
bonus_tasks_complete: this.score.bonus_tasks_complete,
bonus_tasks_assigned: this.score.bonus_tasks_assigned,
task_points_earned: this.score.task_points_earned,
total_points_earned: this.score.total_points_earned,
points_used: this.score.points_used,
points_available: this.score.points_available,
stashed_cash: this.score.stashed_cash,

// Holding for task list testing
//
// {this.props.tasksassignments.map((task, index) => {
//   return (
//     <div key={index}>
//     {this.state.editIndex === index ?
//       <div>
//         <AddTaskAssignment
//           index={index}
//           task={task}
//           updateData={this.props.updateData}
//           tasks={this.props.tasks}
//           cancel={this.goToEdit}
//         />
//       </div>
//       :
//       <div className='items'>
//         <p>{task.id}</p>
//         <p>{task.task_name}</p>
//         <p>{task.points}</p>
//         <p>{task.required}</p>
//         <p>{task.frequency}</p>
//         <p>{task.completed}</p>
//         <button>Completed</button>
//         <button onClick={() => {
//           this.goToEdit(index)
//         }}>Edit</button>
//         <button onClick={() => {
//           this.props.deleteData('tasks/assignments', task.id)
//         }}>Delete</button>
//       </div>
//     }
//     </div>
//   )
// })}




/// from Manage TBs Routes removed when moving to axios routes

// //////////////////////////////////////////
// ///     BEHAVIOR HANDLING
// /////////////////////////////////////////
//
//
// // and behaviors and display as list.
// // addBehavior = (behavior) => {
// //   fetch(`${api_url}/behaviors`,
// //     {
// //       body: JSON.stringify(behavior),
// //       method: 'POST',
// //       headers: {
// //         'Accept': 'application/json, text/plain, */*',
// //         'Content-Type': 'application/json'
// //       }
// //     })
// //     .then(createdBehavior => {
// //       return createdBehavior.json()
// //       }
// //     )
// //     .then(jData => {
// //       this.updateArr(jData, 'behaviors')
// //     })
// //     .then(err => console.log(err))
// // }
//
// // delete behavior
// // deleteBehavior = (behaviorID, arrIndex) => {
// //   fetch(`${api_url}/behaviors/${behaviorID}`,
// //     {
// //       method: 'DELETE'
// //     })
// //     .then(data => {
// //       this.removeFromArr(arrIndex, 'behaviors')
// //     })
// //     .catch(err => console.log(err))
// // }
//
// // edit behavior
// // editBehavior = (behavior) => {
// //   fetch(`${api_url}/behaviors/${behavior.id}`,
// //     {
// //       body: JSON.stringify(behavior),
// //       method: 'PUT',
// //       headers: {
// //         'Accept': 'application/json, text/plain, */*',
// //         'Content-Type': 'application/json'
// //       }
// //     })
// //     .then(updatedBehavior => {
// //       return updatedBehavior.json()
// //     })
// //     .then(jData => {
// //       console.log(jData)
// //       this.getBehaviors()
// //     })
// //     .then(err => console.log(err))
// // }
//
//
// //////////////////////////////////////////
// ///     TASK HANDLING
// /////////////////////////////////////////
//
//
// // // add new task
// // addTask = (task) => {
// //   fetch(`${api_url}/tasks`,
// //     {
// //       body: JSON.stringify(task),
// //       method: 'POST',
// //       headers: {
// //         'Accept': 'application/json, text/plain, */*',
// //         'Content-Type': 'application/json'
// //       }
// //     })
// //     .then(createdTask => {
// //       return createdTask.json()
// //       }
// //     )
// //     .then(jData => {
// //       // console.log(jData)
// //       this.updateArr(jData, 'tasks')
// //     })
// //     .then(err => console.log(err))
// // }
//
//
// // delete task
// // deleteTask = (taskID, arrIndex) => {
// //   fetch(`${api_url}/tasks/${taskID}`,
// //     {
// //       method: 'DELETE'
// //     })
// //     .then(data => {
// //       this.removeFromArr(arrIndex, 'tasks')
// //     })
// //     .catch(err => console.log(err))
// // }
//
// // edit task
// // editTask = (task) => {
// //   fetch(`${api_url}/tasks/${task.id}`,
// //     {
// //       body: JSON.stringify(task),
// //       method: 'PUT',
// //       headers: {
// //         'Accept': 'application/json, text/plain, */*',
// //         'Content-Type': 'application/json'
// //       }
// //     })
// //     .then(updatedTask => {
// //       return updatedTask.json()
// //     })
// //     .then(jData => {
// //       this.getTasks()
// //     })
// //     .then(err => console.log(err))
// // }
//
//
//
//
// //////////////////////////////////////////
// ///     ARRAY HANDLING
// /////////////////////////////////////////
//
// updateArr = (item, arr) => {
//   this.setState( prevState => {
//     prevState[arr].push(item)
//     return {
//       [arr]: prevState[arr]
//     }
//   })
// }
//
// removeFromArr = (arrIndex, arr) => {
//   this.setState(prevState => {
//     prevState[arr].splice(arrIndex, 1)
//     return {
//       [arr]: prevState[arr]
//     }
//   })
// }
//
// setEditParams = (index, dataType) => {
//   this.setState({
//     [dataType + 'Index']: index
//   })
// }
//



//////////////////////////////////////////////////////
////// from Dashboard before rearranging management navigation functionality
// {this.state.manageHousehold ?
//
//   :
//   <div>
//     {
//       this.state.childDetails ?
//       <div>
//         <ChildDashboard
//           childName={this.childName}
//           childDetails={this.toggleChildDetails}
//         />
//       </div>
//       :
//
//     }
//   </div>
// }




///////////////////////////////////////////////////

// <div>
//   {this.state.addMember ?
//     <NewMember
//       handleOpts={this.handleOpts}
//     /> : ''}
//   {this.state.manageAccount ?
//     <ManageAccount
//       handleOpts={this.handleOpts}
//     /> : ''}
// </div>


///////////////////////////////////////////////////

// {
//   this.state.showMembers ?
//   <div>
//     <ul>
//      {this.state.members.map((member, index) => {
//         return (
//           <li key={index}>{member.name}
//             <button onClick={() => {
//               this.setMember(member)
//             }}>Edit</button>
//           </li>
//         )
//       })}
//     </ul>
//   </div>
//   :
//   <div>
//     {
//       this.state.showMembers === false ?
//         <NewMember
//           member={this.state.member}
//
//         />
//         :
//         ''
//     }
//   </div>
// }
// {this.state.addMember ?
//   <NewMember/> : ''
// }
// {this.state.manageAccount ?
//   <ManageAccount/> : ''
// }
