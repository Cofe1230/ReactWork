import { Component } from "react";


class PhoneInfo extends Component{
    render(){
        const {name, phone, id} = this.props.info;
        return(
            <div>
                <div>id : {id}</div>
                <div>이름 : {name}</div>
                <div>전화번호 : {phone}</div>
                <button>삭제</button>
            </div>
        )
    }
}
export default PhoneInfo;