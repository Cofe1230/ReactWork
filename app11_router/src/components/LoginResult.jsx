import React from 'react';
import { useParams } from 'react-router-dom';

const LoginResult = () => {
  const {id,pw}=useParams();

  return (
    <div>
      <h3>Login Result</h3>
      id : {id}<br/>
      pw : {pw}
    </div>
  );
};

export default LoginResult;