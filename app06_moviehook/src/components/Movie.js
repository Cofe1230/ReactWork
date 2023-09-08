import { Link } from "react-router-dom";
import "./Movie.css"

const Movie = ({year,title,summary,poster,genres})=>{
    return(
        <div className="movie">
                <img src={poster} alt={title} title={title}/>
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                {
                    genres.map((genre,index)=>(
                        <li key={index}>{genre}</li>
                    ))
                }
                </ul>
                <p>{summary.slice(0,100)}...</p>
                <Link to={'/details'}
                state={{year,title,genres,poster,summary}}>Detail</Link>
            </div>
    )
}
export default Movie;