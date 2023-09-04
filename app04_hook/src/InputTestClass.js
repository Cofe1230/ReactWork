import { Component } from "react";
class InputTestClass extends Component{
    state = {
        text : ''
    }
    textChange = (e)=>{
        this.setState({
            text : e.target.value
        })
    }
    onReset = () =>{
        this.setState({
            text : ''
        })
    }
    render(){
        return(
            <div>
            <input name='text' placeholder="내용" value={this.state.text} onChange={this.textChange}/>
            <button onClick={this.onReset}>초기화</button>
            <div>
                <b>내용 : </b>
                {this.state.text}
            </div>
        </div>
        )
    }
}
export default InputTestClass