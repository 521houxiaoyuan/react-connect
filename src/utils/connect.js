import React,{Component} from 'react';
import Context from './context';
const connect =(getStore)=>{
  // 通过回掉函数调用每个模块需要的值
  return (WrapConnect)=>{
    return class extends Component{
      render(){
        return(
          <Context.Consumer>
            {
              (store)=>{
                // 这里调用
                let result = getStore(store)
                return <WrapConnect store={{...result}} props={{...this.props}}/>
              }
            }
          </Context.Consumer>
        )
      }
    }
  }
}
export default connect;