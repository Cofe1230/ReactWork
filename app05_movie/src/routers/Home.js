import React, {Component} from 'react';
import axios from 'axios'
import './Home.css';
import Movie from '../components/Movie';

class Home extends Component{
    state = {
        isLoading : true,
        movies : []
    }
    getMovies = async()=>{
        const{
            data  :{
                data : {movies}
            }
            
        } = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`)
        console.log({movies})
        this.setState({movies,isLoading:false})
    } 
    componentDidMount(){
        this.getMovies();
    }
    render(){
        const {isLoading,movies} = this.state
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
                                    //사진, title, year , genres, summary
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
}
export default Home;