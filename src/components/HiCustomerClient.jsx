import React, { Component } from 'react';

class HiCustomerClient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'salut'
    }
  }

  render() {
    return (
      <div className="hiCustomerClient">
      Init: {this.state.text}
      </div>
    )
  }
}

export default HiCustomerClient;