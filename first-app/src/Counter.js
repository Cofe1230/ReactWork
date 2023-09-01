import { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count : 0
        }
        this.increseCount = this.increseCount.bind(this);
        this.decreseCount = this.decreseCount.bind(this);
    }
    //증가
    increseCount(){
        this.setState(({count})=>{
            return{
                count : count+1
            }
        });
    }
    //감소
    decreseCount(){
        this.setState((st)=>{
            console.log("st : " + st)
            return{
                count : st.count -1
            }
        })
    }
    render(){
        return(
            <div>
                <span>카운트 {this.state.count}</span>
                <button onClick={this.increseCount}>카운트 증가</button>
                <button onClick={this.decreseCount}>카운트 감소</button>
            </div>
        )
    }
}
export default Counter;