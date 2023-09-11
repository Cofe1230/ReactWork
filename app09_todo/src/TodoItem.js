import { Button, Card, Container} from "react-bootstrap";

const TodoItem = ({item, deleteTodo})=>{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{item.subject}</Card.Title>
                <Card.Subtitle>{item.name}</Card.Subtitle>
                <Card.Text>{item.summary}</Card.Text>
                <Button variant="danger" onClick={()=>{deleteTodo(item.num)}}>삭제</Button>
            </Card.Body>
        </Card>
    )
}
export default TodoItem;