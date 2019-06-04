class Watch{
    constructor(){
      this.eventslist={}
    }
    $emit(eventname,...arg){
        this.eventslist[eventname].forEach((item)=>{
            item(...arg)
        })
    }
    $on(eventname,ck){
      if(this.eventslist[eventname]){
        this.eventslist[eventname].push(ck)
      }else{
        this.eventslist[eventname] = [ck]
      }
    }
}

let watch = new Watch();

// 先监听
watch.$on('clickone',(res)=>{
    console.log(res)
})
// 触发事件
watch.$emit('clickone', 8)