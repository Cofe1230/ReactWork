import React from 'react';
import { useParams } from 'react-router-dom';

const Topic = ({contents}) => {
  const {id} = useParams();
  let selected_topic = {
    title:'죄송합니다.',
    desc :'해당 주소는 찾을수 없는 페이지'
  }

  for(const topic of contents){
    if(topic.id===Number(id)){
      selected_topic = topic;
      break;
    }
  }
  return (
    <div>
      <h2>{selected_topic.title}</h2>
      {selected_topic.desc}
    </div>
  );
};

export default Topic;