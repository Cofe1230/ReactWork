import React, {useState} from 'react';
import axios from 'axios';

const BoardForm = ({listBoard, insertBoard})=>{
    const [formcontent,SetFormContent]=useState({
        title : '',
        content : '',
    })
    const getValue =(e)=>{
        SetFormContent({
            ...formcontent,
            [e.target.name] : e.target.value
        })
    }
    //제목과 내용을 가지고 서버한테 전달
    const submitBoard=()=>{
        // axios.get('/home')
        // .then((res)=>{
        //     alert('등록완료')
        // })
        axios.post('/api/insert',{
            title : formcontent.title,
            content : formcontent.content
        }).then(()=>{
            alert('등록완료')
            listBoard();
        })
    }
    return(
        <div>
            <input type='text' name='title' placeholder='제목' value={formcontent.title}
            onChange={getValue}/><br/><br/>
            <textarea name='content' rows='10' cols='40' value={formcontent.content}
            onChange={getValue}/><br/>
            <button onClick={submitBoard}>입력</button>
            <button onClick={()=>insertBoard(formcontent)}>입력2</button>
            
        </div>
    )
}
export default BoardForm;