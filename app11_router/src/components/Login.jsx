import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Login = () => {
  const [loginData,setloginData]=useState({
    id : '',
    pw : ''
  })
  const getValue=(e)=>{
      setloginData({
        ...loginData,
        [e.target.name] : e.target.value
      })
  }
  
  return (
    <div>
      <h2>로그인</h2>
      Id : <input type='text' name='id' value={loginData.id} onChange={getValue}/><br/>
      Pw : <input type='password' name='pw' value={loginData.pw} onChange={getValue}/><br/>
      <Link to ={`/login/result/${loginData.id}/${loginData.pw}`} onClick={()=>{setloginData({id:'',pw:''})}} >로그인</Link>
      <Outlet></Outlet>
    </div>
  );
};

export default Login;