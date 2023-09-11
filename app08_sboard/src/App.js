import logo from './logo.svg';
import './App.css';
import BoardForm from './BoardForm';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BoardList from './BoardList';


function App() {
  const [listContent,setListContent] = useState([])
  //전체보기
  const listBoard = ()=>{
    axios.get("api/list").then((res)=>{
      console.log(res.data);
      setListContent(res.data);
    })
  }
  //삭제
  const deleteBoard = (num)=>{
    axios.delete("api/delete/"+num)
    .then(()=>{
      alert('삭제성공')
      setListContent(listContent.filter(board=>board.num!=num))
    })
  }
  //추가
  const insertBoard = (data)=>{ //data는 추가된 내용
    axios.post("api/insert/",{
      title:data.title,
      content:data.content
    }).then((resp)=>{
      alert('등록완료')
      console.log(resp);
      setListContent(listContent.concat({
        num: resp.data.num,
        title:data.title,
        content:data.content,
        ...listContent
      }))
    })
  }
  useEffect(()=>{
    listBoard()
  },[])
  return (
    <div style={{paddingLeft:'20px'}}>
      <h1>app08_Simple Board</h1>
      <hr/>
      <BoardForm listBoard={listBoard}
                  insertBoard = {insertBoard}/>
      <hr/>
      <BoardList lists = {listContent} 
                deleteBoard = {deleteBoard}/>
    </div>
  );
}

export default App;
