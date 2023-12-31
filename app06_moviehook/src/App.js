import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './routers/Home';
import About from "./routers/About";
import Navigation from "./components/Navigation";
import Poster from "./routers/Poster";
import Detail from "./routers/Detail";


function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/about"} element={<About/>}></Route>
        <Route path={"/poster"} element={<Poster/>}></Route>
        <Route path={"/details"} element={<Detail/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
