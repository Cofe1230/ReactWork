import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './component/pages/Home';
import Navigation from './component/navigation/Navigation';
import TodoWritePage from './component/pages/TodoWritePage';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/writeTodo' element={<TodoWritePage/>}></Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
