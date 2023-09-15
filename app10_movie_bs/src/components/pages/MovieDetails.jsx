import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './MovieDetails.css'

const MovieDetails = () => {
  const location = useLocation();
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
      </Card>
    </Container>
    
  );
};

export default MovieDetails;