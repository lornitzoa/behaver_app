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
