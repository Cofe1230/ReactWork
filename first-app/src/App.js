import logo from './logo.svg';
import './App.css';
import Device from './Device';
import Counter from './Counter';
import Food from './Food';
import Movie from './Movie';
import Counter2 from './Counter2';
import MyDevice from './MyDevice';


function App() {
  const mydataApp = {
    "myDeviceData" : [
      {
        name : "아이폰",
        ram : "6gb",
        touch : "yes",
        face : "yes"
      },
      {
        name : "갤럭시 s22",
        ram : "8gb",
        touch : "no",
        face : "yes"
      },
      {
        name : "갤럭시 z",
        ram : "6gb",
        touch : "no",
        face : "no"
      },
      {
        name : "픽셀5",
        ram : "6gb",
        touch : "yes",
        face : "yes"
      }
    ]
  }
  return( 
    <div>
      <h3>Counter2 클래스 화살표 함수</h3>
      <Counter2/>
      <hr/>
      <h3>MyDevice 컴포넌트</h3>
      <MyDevice mydata = {mydataApp}/>
      <hr/>
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
