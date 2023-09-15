import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import '../../styles/MovieInsert.css'
import { insertMovie } from '../../apis/movieAPI';


const MovieInsert = () => {
  const [movie, setMovie] = useState({
    title : '',
    year : '',
    summary : ''
  })
  
  const getValue = (e)=>{
    setMovie({
      ...movie,
      [e.target.name]:e.target.value
    })
  }
  // const insertMovie = async (data)=>{
  //   try{
  //     console.log(data.title);
  //     const resp = await axios.post('insert',{
  //                   title:data.title,
  //                   year:data.year,
  //                   summary:data.summary});
  //     console.log(resp);
  //     alert('추가됐습니다')
  //   }catch(e){
  //     console.log(e);
  //   }
  // }


  return (
    <Container className='MovieInsert--Container'>
      <Form>
        <Form.Group className="mb-3" controlId="movieForm.title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" name='title' value={movie.title} onChange={getValue} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="movieForm.year">
          <Form.Label>Year</Form.Label>
          <Form.Control type="text" placeholder="Year" name='year' value={movie.year} onChange={getValue} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="movieForm.summary">
          <Form.Label>Summary</Form.Label>
          <Form.Control type="text" placeholder="Summary" name='summary' value={movie.summary} onChange={getValue} />
        </Form.Group>
        <Button onClick={()=>insertMovie(movie).then(setMovie({title:'',year:'',summary:''}))}>추가하기</Button>
      </Form>
    </Container>
  );
};

export default MovieInsert;