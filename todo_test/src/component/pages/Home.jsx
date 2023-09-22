import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import TodoList from '../list/TodoList';

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const getTodoList = async ()=>{
    try{
      const response = await axios.get("/todo/todoList")
      setTodoList(response.data);
    }catch(e){

    }
  }
  useEffect(()=>{getTodoList()},[])
  return (
    <main>
      <TodoList todos={todoList}/>
    </main>
  );
};

export default Home;