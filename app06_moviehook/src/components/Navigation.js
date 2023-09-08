import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation(){
    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">app06__About</Link>
            <Link to="/poster">Poster</Link>
        </div>
    )
}
export default Navigation;