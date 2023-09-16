import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import right from '../assets/Chevronright.svg'
import moviePoster from '../assets/moviePoster.png'
import favorite from '../assets/Heart.svg'
import tomato from '../assets/tomato.png'
import imdb from '../assets/imdb.png'
import redheart from '../assets/red-heart-11121.svg'
import { useNavigate, Link } from 'react-router-dom';


function FeaturedMovie() {
  
  // const movies = [1,2,3,4,5,6,7,8,9,10]
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [src, setSrc] = useState(favorite)
  const baseURL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
  const imageAPI = "https://image.tmdb.org/t/p/w300"
  

  const genres = {
    28: "Adventure",
    12: "Animation",
    16: "Comedy",
    35: "Crime",
    80: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
    10759: "Action & Adventure",
    10762: "Kids",
    99: "Documentary",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics"
  };

  function handleFavorite(e) {
      
        setIsFavorite(prev => !prev)
        console.log(isFavorite)
        
        e.target.src = isFavorite ? redheart : favorite   
  
  }


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTk3NzBmOTJhOTgwMjAzNzU1MmM3OWE5ZWEzOTYyOCIsInN1YiI6IjY1MDU3YmIzM2NkMTJjMDBlYjQ0MDI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HXMj0feCbQ2WBoHqk7TAZy-18ksuhW_PuAtIxbQpxRs'
    }
  };

  

  useEffect(() => {
    setIsLoading(false)
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(response => {
        return response.json()}
        )
      .then(response => {
        setMovies(response.results)
        console.log(response)
        return response
      })
      .catch(err => console.error(err));
  }, []);
 const slicedMovies = movies.slice(0, 10)
 console.log(slicedMovies)
 
  return (
   <>
   {isLoading ? <h1 className='text-black'>loading</h1> :
   
          <div className='lg:px-8  px-12 py-2'>
            <div className='flex items-center justify-between'>
              <h2 className='text-4xl font-semibold'>Featured Movie</h2>
              <div className='flex items-center'>
                <p className='text-red-500'>See more</p>
                <img src={right} alt="" srcset="" />
              </div>
            </div>

            <div className='flex flex-wrap justify-start gap-x-12 gap-y-28 mt-10'>
              {slicedMovies.map((movie, index) => {
                return (
                  <Link to={`/${movie.id}`}>
                    <div  data-testid="movie-card" id={movie.id} className='' key={index}>
                      <div className='relative'>
                        <img data-testid='movie-poster' className='' src={imageAPI + movie.poster_path} alt="" srcset="" />
                        <p className='absolute top-4 left-4 text-series-font bg-favorite rounded-lg text-xs py-px px-2 font-semibold'>TV SERIES</p>
                        <img id={movie.id} className='absolute top-4 right-4 bg-favorite p-0.5 rounded-full w-4 h-4' src={src} alt="" srcset="" onClick={(e) => handleFavorite(e)} />
                      </div>
                      <div className='flex flex-col gap-y-2'>
                        <div>
                          <p data-testid='movie-release-date' className='text-poster-grey text-xs pt-3'>{movie.origin_country}, 2016-Current</p>
                        </div>
                        <div>
                          <p data-testid='movie-title' className='font-bold'>{movie.title}</p>
                        </div>
                        <div className="flex items-center justify-between gap-6">
                          <div className="flex items-center gap-2">
                            <img src={imdb} alt='' />
                            <p className='text-rating text-xs'>{movie.vote_average * 10}/100</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <img src={tomato} alt='' />
                            <p className='text-rating text-xs'>{movie.vote_average * 10}%</p>
                          </div>
                        </div>
                        <div className='text-poster-grey text-xs'>{movie.genre_ids.map((id, index) => (index === movie.genre_ids.length - 1) ? <span> {genres[id]} </span> : <span>{genres[id]}, </span>)}</div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
  }
    </>
  )
}

export default FeaturedMovie
