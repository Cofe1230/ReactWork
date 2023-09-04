import { Component } from "react";
import './TodoItem.css';

class TodoItem extends Component{
    render(){
        const {id, text, checked, onRemove, onToggle}= this.props;
        return(
            <div className="todo-item">
                <div className="remove">

                    &times;
                </div>
                <div>
                    <div>{text}</div>
                </div>
                {checked && <div className="check-mark">&#x2713;</div>}
            </div>
        )
    }
}
export default TodoItem;