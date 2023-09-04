import React, {useState} from "react";

const Say = ()=>{
    const [message,setMessage] = useState('안녕')
    const [color, setColor] = useState('black')
    const onClickEnter = ()=>{
        setMessage('반갑습니다')
        setColor('blue')
    }
    const onClickLeave = ()=>{
        setMessage('안녕히 가세요')
        setColor('red')
    }
    const onClickChange = (e)=>{
        setColor(e.target.name)
    }
    const changeColor = (color)=>{
        setColor(color)
    }
    
    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave} >퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button onClick={()=>changeColor('red')}>빨간색</button>
            <button onClick={()=>changeColor('blue')}>파란색</button>
            <button name="pink" onClick={onClickChange}>분홍색</button>
            <button name="green" onClick={onClickChange}>초록색</button>
        </div>
    )
}
export default Say;