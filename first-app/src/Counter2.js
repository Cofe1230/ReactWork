import { Component } from "react";

class Counter2 extends Component{
    state = {
        myAge : 0
    }
    //화살표함수
    plus = ()=>{
        //구조분해할당
        this.setState(({myAge})=>{
            return {
                myAge : myAge+1
            }
        })
        // this.setState(
        //     (st)=>{myAge : st.myAge+1}
        // )
    }
    minus = ()=>{
        this.setState(
            ({myAge})=>{
                return{
                    myAge : myAge-1
                }
            }
        )
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    render(){
        return(
            <div>
                <span>나이 {this.state.myAge}</span>
                <button onClick={this.plus}>증가</button>
                <button onClick={this.minus}>감소</button>
            </div>
        )

    }
}
export default Counter2