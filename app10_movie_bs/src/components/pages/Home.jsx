import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Movie from '../movie/Movie';
import {Row, Col, Spinner, Container} from 'react-bootstrap';


const Home = () => {
  const[isLoading,setIsLoading]=useState(true);
    const[movies,setMovies]=useState([]);
    const getMovies = async()=>{

       // const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`)
            //res.data => axios가 주는 data (성공 등등)
            //res.data.[이후 사이트가 주는 값]
        //console.log(res);
        //setMovies(res.data.data.movies)
        //setIsLoading(false)
        try{
            const res = await axios.get("movieList");
            console.log(res);
            setMovies(res.data);
            setIsLoading(false);
        }catch(e){
            console.log(e);
        }
        
    }
    useEffect (()=>{
        getMovies()
    },[])
  return (
    <Container>
        {
            //참 일경우 loading 아닐경우 movie
            isLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ):(
                <Row>
                    {
                        movies.map((movie,index)=>{
                            return(
                                <Col md={4} key={index}>
                                    <Movie key={movie.id}
                                        year={movie.year}
                                        title={movie.title}
                                        summary={movie.summary}
                                        poster={movie.medium_cover_image}
                                        genres={movie.genres}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            )
        }
        </Container>
  );
};

export default Home;