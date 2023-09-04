import logo from './logo.svg';
import './App.css';
import { Component } from "react";
import CommentList from './CommentList';
import Form from './component/Form';
import TodoListTemplate from './component/TodoListTemplate';
import TodoItemList from './component/TodoItem';

class App extends Component {
  id = 4;
  state = {
    input : "",
    todos : [
      {id : 0, text: '치킨먹기1', checked: false},
      {id : 1, text: '치킨먹기2', checked: true},
      {id : 2, text: '치킨먹기3', checked: false},
      {id : 3, text: '치킨먹기4', checked: true}
    ]
  }

  handleChange = e=>{
    this.setState({
      input : e.target.value
    })
  }
  //추가
  handleCreate = ()=>{

  }
  //입력하고 엔터키
  handleKeyPress = e =>{

  }
  render(){
    return (
      <div>
       {/* <CommentList/> */}
        <TodoListTemplate
          form = {
            <Form 
            value={this.state.input} 
            onKeyPress={this.handleKeyPress} 
            onChange={this.handleChange} 
            onCreate={this.handleCreate}/>
          }>
          
          <TodoItemList/>
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
