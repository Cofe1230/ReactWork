import { Component } from "react";

class Movie extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>Movie 컴포넌트</h1>
                <div>{this.props.title}</div>
            </div>
        )
    }
}
export default Movie;