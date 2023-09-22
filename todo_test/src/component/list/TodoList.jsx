import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
  return (
    <Container>
      {
        todos.map((item)=>{
          return(
            <TodoItem key={item.id} item={item}/>
          )
        })
      }
    </Container>
  );
};

export default TodoList;