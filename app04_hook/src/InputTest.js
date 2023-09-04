import React, {useState} from "react";

const InputTest = ()=>{
    const [inputs,setInputs] = useState({
        text : ''
    })
    const onChange = (e)=>{
        setInputs({
            [e.target.name] : e.target.value
        })
    }
    const onReset = ()=>{
        setInputs({
            text : ''
        })
    }
    const {text} = inputs
    return(
        <div>
            <input name='text' placeholder="내용" value={text} onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>내용 : </b>
                {text}
            </div>
        </div>
    )
}
export default InputTest;