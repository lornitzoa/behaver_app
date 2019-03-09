<div>
  {this.state.addMember ?
    <NewMember
      handleOpts={this.handleOpts}
    /> : ''}
  {this.state.manageAccount ?
    <ManageAccount
      handleOpts={this.handleOpts}
    /> : ''}
</div>




{
  this.state.showMembers ?
  <div>
    <ul>
     {this.state.members.map((member, index) => {
        return (
          <li key={index}>{member.name}
            <button onClick={() => {
              this.setMember(member)
            }}>Edit</button>
          </li>
        )
      })}
    </ul>
  </div>
  :
  <div>
    {
      this.state.showMembers === false ?
        <NewMember
          member={this.state.member}

        />
        :
        ''
    }
  </div>
}
{this.state.addMember ?
  <NewMember/> : ''
}
{this.state.manageAccount ?
  <ManageAccount/> : ''
}
