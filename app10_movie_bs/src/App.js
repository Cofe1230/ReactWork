import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/navigation/Navigation';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import MovieDetails from './components/pages/MovieDetails';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/details' element={<MovieDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
