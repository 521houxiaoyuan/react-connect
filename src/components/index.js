import React, { Component } from 'react'
import connect from '../utils/connect';
import One from "./one";
class Index extends Component {
  render() {
    return (
      <div>
        index
        <One age={{age:15}} />
      </div>
    )
  }
}
export default connect(
  (store)=>{
    return store.Indexreducer;
  }
)(Index);