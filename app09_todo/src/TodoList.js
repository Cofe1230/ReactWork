import { Col, Container, Row } from "react-bootstrap";
import TodoItem from "./TodoItem";

const TodoList = ({todoList , deleteTodo})=>{
    return(
        <Container>
            <Row>
                {
                    todoList.map((item,index)=>{
                        return(
                            <Col md={4} key={index}>
                                <TodoItem key={item.num} item={item} deleteTodo={deleteTodo}/>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
export default TodoList;