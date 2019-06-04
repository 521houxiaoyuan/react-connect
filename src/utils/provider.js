import React, { Component } from 'react'
import Context from './context';
class Provider extends Component{
  constructor(){
    super();
  }
  render(){
    console.log(this.props);
    // chlidren 获取组件嵌套的所有组件;
    let {store,children}=this.props;
    console.log(store);
    return(
      <Context.Provider value={store}>
       {children}
      </Context.Provider>
    )
  }
}

export default Provider;