import { Component } from "react";
import "./Movie.css"

class Movie extends Component{
    render(){
        const {title,year,summary,poster,genres} = this.props;
        return(
            <div className="movie">
                <img src={poster} alt={title} title={title}/>
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p>{summary.slice(0,100)}...</p>
                <ul className="movie__genres">
                {
                    genres.map((genre,index)=>(
                        <li key={index}>{genre}</li>
                    ))
                }
                </ul>
            </div>
        )
    }
}
export default Movie;