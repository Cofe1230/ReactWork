import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Contact from './components/Contact';
import Topics1 from './components/Topics1';
import Topics from './components/Topics';
import Topic from './components/Topic';
import Login from './components/Login';
import LoginResult from './components/LoginResult';

function App() {

  const contents = [
    {id : 1, title : 'Java', desc : 'Java is 프로그램 언어'},
    {id : 2, title : 'HTML', desc : 'HTML is 마크업 언어'},
    {id : 3, title : 'SQL', desc : 'SQL is 데이터베이스 언어'}
  ]

  return (
    <BrowserRouter>
    <div>
      <h1>react router dom example</h1>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/topics'element={<Topics contents={contents}/>}>
        {/* 하위 주소를 입력받을 때 해당 Route안에 Route를 포함시킨다 */}
          <Route path=':id'element={<Topic contents = {contents}/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}>
          <Route path='result/:id/:pw' element={<LoginResult/>}></Route>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
