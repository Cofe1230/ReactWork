import './App.css';
import TodoForm from './TodoForm';
import {useEffect, useState} from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';

function App() {
  const [todoContentList, setTodoContentList] = useState([]);

  //전체 가져오기
  const todoFindAll = ()=>{
    axios.get("todo/list").then((resp)=>{
      setTodoContentList(resp.data);
    })
  }

  //추가
  const insertTodo = (data)=>{
    axios.post("todo/insert",{
      name : data.name,
      subject : data.subject,
      summary : data.summary
    }).then((resp)=>{
      alert('입력되었습니다')
      setTodoContentList(todoContentList.concat(resp.data))
    })
  }

  //삭제
  const deleteTodo = (num)=>{
    axios.delete("todo/delete/"+num)
    .then(()=>{
      alert('삭제 되었습니다')
      setTodoContentList(todoContentList.filter(todo=>todo.num!=num))
    })
  }
  useEffect(()=>{
    todoFindAll();
  },[])
  return (
    <div>
      <Stack gap={3}>
      <Container><h1>To Do</h1></Container>
      <TodoForm insertTodo = {insertTodo}/>
      <TodoList todoList = {todoContentList} deleteTodo = {deleteTodo}/>
      </Stack>
    </div>
  );
}

export default App;
