import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/navigation/Navigation';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import MovieDetails from './components/pages/MovieDetails';
import MovieInsert from './components/pages/MovieInsert';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/details' element={<MovieDetails/>}></Route>
          <Route path='/insert' element={<MovieInsert/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
