import { Component } from "react";
import PhoneInfo from "./PhoneInfo";


class PhoneList extends Component{
    render(){
        const {data} = this.props
        return(
            <div>
                [Phone List $$$$$$]<br/>
                {
                    data.map((info)=>{
                        return(
                            <PhoneInfo info={info}/>
                        )
                    })
                }
            </div>
        )
    }
}
export default PhoneList;