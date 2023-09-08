import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Movie from '../components/Movie';


const Home = ()=>{
    const[isLoading,setIsLoading]=useState(true);
    const[movies,setMovies]=useState([]);
    const getMovies = async()=>{
        await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`)
        .then((res)=>{
            //res.data => axios가 주는 data (성공 등등)
            //res.data.[이후 사이트가 주는 값]
            console.log(res)
            console.log(res.data.data.movies)
            setMovies(res.data.data.movies)
            setIsLoading(false)
        })
    }
    useEffect (()=>{
        getMovies()
    },[])
    return(
        <section className='container'>
        {
            //참 일경우 loading 아닐경우 movie
            isLoading ? (
                <div className='loader'>
                    <span>Loading</span>
                </div>
            ):(
                <div className='movies'>
                    {
                        movies.map((movie)=>{
                            return(
                                <Movie key={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}/>
                            )
                        })
                    }
                </div>
            )
        }
        </section>
    )
}
export default Home;
