import React from 'react';
import Topic1 from './Topic1';

const Topics1 = ({contents}) => {
  return (
    <div>
      <h2>Topic</h2>
      {
        contents.map((item)=>(
            <Topic1 key={item.id} item={item}/>
        ))
      }
    </div>
  );
};

export default Topics1;