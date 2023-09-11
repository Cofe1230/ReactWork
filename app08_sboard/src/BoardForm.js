import {useState} from 'react';
import axios from 'axios';
const BoardForm = ()=>{
    const [formcontent, setFormContent] = useState({
        title : '',
        content : ''
    })
    const getValue=(e)=>{
        setFormContent({
            ...formcontent,
        [e.target.name] : e.target.value
        })
    }
    const submitBoard=()=>{
        axios.post('/api/insert',{
            title:formcontent.title,
            content:formcontent.content
        }).then(()=>{
            alert('등록완료')
        })
    }
    return(
        <div>
            <input type='text' name='title' placeholder='제목' value={formcontent.title} onChange={getValue}/><br/><br/>
            <textarea name='content' rows='10' cols='40' value={formcontent.content} onChange={getValue}/><br/>
            <button onClick={submitBoard}>입력</button>
        </div>
    )
}
export default BoardForm;