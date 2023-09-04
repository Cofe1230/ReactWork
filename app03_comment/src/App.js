import logo from './logo.svg';
import './App.css';
import { Component } from "react";
import CommentList from './CommentList';
import Form from './component/Form';
import TodoListTemplate from './component/TodoListTemplate';
import TodoItemList from './component/TodoItemList';


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
    const {input,todos} = this.state
    this.setState({
      input : '',
      todos : todos.concat({
        id : this.id++,
        text : input,
        checked : false
      })
    })
  }
  //삭제
  handleRemove = id =>{
    console.log("handleRemove" + id)
  }
  //토글
  handleToggle = (id)=>{
    console.log("handleToggle" + id)
  }
  //입력하고 엔터키
  handleKeyPress = e =>{
    if(e.key === 'Enter'){
      this.handleCreate()
    }
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
          
          <TodoItemList
          todos = {this.state.todos}
          onRemove = {this.handleRemove}
          onToggle = {this.handleToggle}/>
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
