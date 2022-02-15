import React from "react";
const MovieList=(props)=>{
    return(
        <div className="iner">
            {props.movies.map((Search,index)=>(
                <div className="imag">
                    <img src={Search.Poster} alt="movie"></img>
                </div>
            ))}
        </div>
    )
}
export default MovieList