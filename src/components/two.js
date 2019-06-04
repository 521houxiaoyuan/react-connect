import React, { Component } from 'react'
import connect from '../utils/connect';
class Two extends Component {
  render() {
    return (
      <div>
        two
      </div>
    )
  }
}
export default connect(
  (store)=>{
    return store.Tworeducer;
}
)(Two);