import { Component } from "react";


class PhoneInfo extends Component{
    handleRemove = ()=>{
        const {info, onRemove} = this.props
        onRemove(info.id)
    }
    render(){
        const {name, phone, id} = this.props.info;
        const style ={
            border : '1px solid black',
            padding : '8px',
            margin : '8px'
        }
        
        return(
            <div style={style}>
                <div>id : {id}</div>
                <div>이름 : {name}</div>
                <div>전화번호 : {phone}</div>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}
export default PhoneInfo;