import logo from './logo.svg';
import './App.css';
import PhoneForm from './component/PhoneForm';
import PhoneList from './component/PhoneList';
import { Component } from 'react';
class App extends Component {
  state ={
    information : [
      {
        id : 0,
        name : "홍길동",
        phone : "010-1111-1111"
      },
      {
        id : 1,
        name : "이순신",
        phone : "010-2222-2222"
      }
    ]
  }

  render(){
    return (
      <div>
        <PhoneForm/>
        <PhoneList data = {this.state.information}/>
      </div>
    );
  }
}

export default App;
