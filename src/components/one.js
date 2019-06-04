import React, { Component } from 'react'
import connect from '../utils/connect';
import Two from "./two";
class One extends Component {
  render() {
    console.log(this.props);
    let {store,props}=this.props;
    return (
      <div>
        one
        <div>{store.name}</div>
        <div>{props.age.age}</div>
        <Two/>
      </div>
     
    )
  }
}
export default connect(
  (store)=>{
    return store.Onereducer;
  }
)(One)