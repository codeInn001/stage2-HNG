import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import right from '../assets/Chevronright.svg'
import { useNavigate, Link } from 'react-router-dom';
import Card from './Card'


function FeaturedMovie() {
  
  // const movies = [1,2,3,4,5,6,7,8,9,10]
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
  
  const baseURL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
  
  

  
  


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTk3NzBmOTJhOTgwMjAzNzU1MmM3OWE5ZWEzOTYyOCIsInN1YiI6IjY1MDU3YmIzM2NkMTJjMDBlYjQ0MDI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HXMj0feCbQ2WBoHqk7TAZy-18ksuhW_PuAtIxbQpxRs'
    }
  };

  

  useEffect(() => {
    setIsLoading(false)
    fetch(baseURL, options)
      .then(response => {
        return response.json()}
        )
      .then(response => {
        setMovies(response.results)
        // console.log(response.results)
        return response
      })
      .catch(err => console.error(err));
  }, []);
 const slicedMovies = movies.slice(0, 10)
 console.log(slicedMovies)
 
  return (
   <>
   {isLoading ? <h1 className='text-[rgb(0,0,0)] text-center'>loading...</h1> :
   
          <div className='lg:px-8  px-12 py-2 text-[#000]'>
            <div className='flex items-center justify-between'>
              <h2 className='text-4xl font-semibold'>Featured Movie</h2>
              <div className='flex items-center'>
                <p className='text-red-500'>See more</p>
                <img src={right} alt="" srcset="" />
              </div>
            </div>

            <div className='flex flex-wrap justify-start gap-x-12 gap-y-28 mt-10'>
              {slicedMovies.map((movie, index) => {
                return (<Card movie={movie} index={index} key={movie.id} />)
              })}
            </div>
          </div>
  }
    </>
  )
}

export default FeaturedMovie
