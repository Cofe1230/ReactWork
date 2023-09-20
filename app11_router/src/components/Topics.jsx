import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Topics = ({contents}) => {
  const list=[]
  for(let i=0; i<contents.length; i++){
    list.push(
      <li key={contents[i].id}>
        <NavLink to={`/topics/${contents[i].id}`}>{contents[i].title}</NavLink>
      </li>
    )
  }
  return (
    <div>
      <h2>Topics</h2>
      토픽페이지 입니다.
      <ul>
        {list}
      </ul>
      {/* 하위 컴포넌트가 보여지는 부분 */}
      <Outlet></Outlet>
    </div>
  );
};

export default Topics;