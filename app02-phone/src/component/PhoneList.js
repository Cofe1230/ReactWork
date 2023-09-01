import { Component } from "react";
import PhoneInfo from "./PhoneInfo";


class PhoneList extends Component{
    render(){
        const {data,onRemove} = this.props
        return(
            <div>
                [Phone List]<br/>
                {
                    data.map((info)=>{
                        return(
                            <PhoneInfo key={info.id} info={info} onRemove = {onRemove}/>
                        )
                    })
                }
            </div>
        )
    }
}
export default PhoneList;