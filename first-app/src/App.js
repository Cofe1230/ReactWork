import logo from './logo.svg';
import './App.css';
import Device from './Device';
import Counter from './Counter';
import Food from './Food';
import Movie from './Movie';
import Counter2 from './Counter2';


function App() {
  
  return( 
    <div>
      <h3>Counter2 클래스 화살표 함수</h3>
      <Counter2/>
      <Movie title = "영화1"/>
      <Movie title = "영화2"/>
      <Movie title = "영화3"/>
      <Movie title = "영화4"/>
      <h1>안녕</h1>
      <h2>안녕2</h2>
    <Device/>
    <Counter/>
    <Food/>
    </div>
  );
}

export default App;
