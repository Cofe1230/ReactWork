import { useEffect, useState } from 'react';
import './App.css';
import BoardForm from './BoardForm';
import BoardList from './BoardList';
import axios from 'axios';

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
  useEffect(()=>{
    listBoard()
  },[])
  return (
    <div style={{paddingLeft:'20px'}}>
      <h1>app07_Simple Board</h1>
      <hr/>
      <BoardForm listBoard={listBoard}/>
      <hr/>
      <BoardList lists = {listContent} 
                deleteBoard = {deleteBoard}/>
    </div>
  );
}

export default App;
