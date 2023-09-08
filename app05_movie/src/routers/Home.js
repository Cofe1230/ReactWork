import React, {Component} from 'react';
import axios from 'axios'
import './Home.css';
import Movie from '../components/Movie';

class Home extends Component{
    state = {
        isLoading : true,
        movies : []
    }
    //axios 사용
    // getMovies = async()=>{
    //     const{
    //         data  :{
    //             data : {movies}
    //         }
            
    //     } = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`)
    //     console.log({movies})
    //     this.setState({movies,isLoading:false})
    // }
    
    //axios 사용안할때 JS로 사용하여 같은 기능
    getMovies = ()=>{
        fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`)
        .then((res)=>res.json())
        .catch(err=>console.log(err))
        .then((res)=>{
            console.log(res.data.movies)
            this.setState({movies:res.data.movies,isLoading:false})
        })
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