import React from 'react';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';

const Movie = ({id,year,title,summary,poster,genres}) => {
  return (
    <Card>
      <Card.Img variant='top'  src={poster} alt={title} title={title}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{year}</Card.Subtitle>
        <ul className="movie__genres">
        {
            genres.map((genre,index)=>(
                <li key={index}>{genre}</li>
            ))
        }
        </ul>
        <Card.Text>{summary.slice(0,100)}...</Card.Text>
      </Card.Body>
      <Card.Footer>
      <Link to={'/details'} state={{id,year,title,genres,poster,summary}}>
        <small className='text-muted'>Details</small>
      </Link>
      </Card.Footer>
  </Card>
  );
};

export default Movie;