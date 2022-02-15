import React from 'react'
import axios from 'axios'
import SearchInput from './component/SearchInput'
import MovieList from './component/movieList'
import './component/style.css'

class  App extends React.Component{
  state={
    movies:[]
  }
  onSearchSubmit= async(entry)=>{
    const response=await axios.get(
      `http://www.omdbapi.com/?s=${entry}&apikey=78b309b5`
    )
    this.setState({movies:response.data.Search})
    
  }

  render(){
    return(
      <div className='movie-app'>

          <SearchInput onSearchSubmit={this.onSearchSubmit}></SearchInput>
        <div className='images'><MovieList movies={this.state.movies}></MovieList></div>
          
      </div>
    )
  }
}
export default App