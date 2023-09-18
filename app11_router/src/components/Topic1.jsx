import React from 'react';

const Topic1 = ({item}) => {
  return (
      <>
        <div>{item.id}</div>
        <div>{item.title}</div>
        <div>{item.desc}</div>
        <hr/>
      </>
  );
};

export default Topic1;