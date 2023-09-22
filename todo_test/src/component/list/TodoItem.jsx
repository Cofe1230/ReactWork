import React from 'react';

const TodoItem = ({item}) => {
  return (
    <div>
      {item.title}
      <hr/>
    </div>
  );
};

export default TodoItem;