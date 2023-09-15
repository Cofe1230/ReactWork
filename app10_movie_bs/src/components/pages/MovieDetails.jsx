import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteMovie } from '../../apis/movieAPI';
import '../../styles/MovieDetails.css'

const MovieDetails = () => {
  const navigator = useNavigate();
  const location = useLocation();
  console.log(location.state.id);
  return (
    <Container className='MovieDetail--Container'>
      <Card className='MovieDetail--Card'>
        <Card.Img variant='top' src={location.state.poster} alt={location.state.title} title={location.state.title} />
        <Card.Body>
          <Card.Title>{location.state.title}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>{location.state.year}</Card.Subtitle>
          <ul className="movie__genres">
              {
                  location.state.genres.map((genre,index)=>{
                      return(
                          <li key={index}>
                              {genre}
                          </li>
                      )
                  })
              }
          </ul>
          <Card.Text>{location.summary}</Card.Text>
        </Card.Body>
        <Card.Footer className='Cardfooter'>
          <span className='deleteItem' onClick={()=>deleteMovie(location.state.id).then('삭제되었습니다').then(navigator('/'))}>🗑삭제</span>
        </Card.Footer>
      </Card>
    </Container>
    
  );
};

export default MovieDetails;