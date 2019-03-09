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
