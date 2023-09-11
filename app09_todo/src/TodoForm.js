import {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const TodoForm= ({insertTodo})=>{
    const [formContent, setFormContent] = useState({
        subject:'',
        name : '',
        summary : '',
    })
    const getValue=(e)=>{
            setFormContent({
                ...formContent,
                [e.target.name] : e.target.value
            })
    }
    useEffect(()=>{
        setFormContent({
            subject:'',
            name:'',
            summary:''  
        })
    },[insertTodo])
    return(
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="subject">
                    <Form.Label><b>subject</b></Form.Label>
                    <Form.Control type="text" placeholder="subject" name="subject" value={formContent.subject} onChange={getValue} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label><strong>name</strong></Form.Label>
                    <Form.Control type="text" placeholder="name" name="name" value={formContent.name} onChange={getValue} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="summary">
                    <Form.Label><b>summary</b></Form.Label>
                    <Form.Control as="textarea" rows={3} value={formContent.summary} onChange={getValue} name="summary"/>
                </Form.Group>
                <Button variant='secondary' onClick={()=>insertTodo(formContent)}>전송</Button>
            </Form>
        </Container>
    )
}
export default TodoForm;
