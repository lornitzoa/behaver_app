//// from ManageTBs working on turning behavior list item to edit form
<li key={index}>
  {behavior.behavior}
  <button onClick={}>Edit</button>
  <button onClick={() => {
    this.deleteBehavior(behavior.id, index)
  }}>Delete</button>
</li>




///////////
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
