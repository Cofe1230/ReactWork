import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Poster = ()=>{
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
        isLoading ? (
            <div className='loader'>
                <span>Loading</span>
            </div>
        ):(
            <div className='movies'>
                    {
                        movies.map((movie)=>{
                            return(
                                <img src={movie.medium_cover_image}/>
                            )
                        })
                    }
                </div>
        )
    )
}
export default Poster;