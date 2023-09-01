import { Component } from "react";


class MyDevice1 extends Component{

    render(){
        const {mydata} = this.props
        return(
            <div>
                {
                    mydata.map((device,index)=>{
                        return(
                            <div key={index}>
                            키 : {index}<br/>
                            이름 : {device.name}<br/>
                            램 : {device.ram}<br/>
                            터치 : {device.touch}<br/>
                            안면인식 : {device.face}<br/><br/>
                            </div>
                        )                       
                    })
                }
            </div>
        )
    }
}
export default MyDevice1;