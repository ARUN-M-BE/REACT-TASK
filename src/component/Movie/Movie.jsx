import React from 'react'
// import './Movie.css'
import { useEffect } from 'react'
import { useState } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

function Movie() {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1e4c4b0b6b4c2d7f4c3b1b6e7b4c1b6e')
        .then((res) => {
            setMovies(res.data.results)
        })
    }, [])

  return (
    <div> 
        <h1>Movie</h1>

        <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
        <div className="movie-container">
            {movies.filter((movie) => {
                if(search === ''){
                    return movie
                } else if(movie.title.toLowerCase().includes(search.toLowerCase())){
                    return movie
                }
            }).map((movie) => {
                return <MovieCard key={movie.id} {...movie}/>
            })}
        </div>
        <div>
            <Nav/>
            <div className=''>
                {movies.map((                    movie) => {
                    return <MovieCard key={movie.id} {...movie}/>

                })}
            </div>
            
            <Footer/>
        </div>
    </div>
  )
}

export default Movie