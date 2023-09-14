import React from 'react'
import right from '../assets/Chevronright.svg'
import moviePoster from '../assets/moviePoster.png'
import favorite from '../assets/Heart.svg'
import tomato from '../assets/tomato.png'
import imdb from '../assets/imdb.png'

function FeaturedMovie() {
  const movies = [1,2,3,4,5,6,7,8,9,10]


  return (
    <div className='lg:px-8  px-12 py-2'>
      <div className='flex items-center justify-between'>
        <h2 className='text-4xl font-semibold'>Featured Movie</h2>
        <div className='flex items-center'>
          <p className='text-red-500'>See more</p>
          <img src={right} alt="" srcset="" />
        </div>
      </div>

      <div className='flex flex-wrap justify-between gap-y-28 mt-10'>
        {movies.map((movie,index) => {
          return (
            <div className='' key={index}>
              <div className='relative'>
                <img className='' src={moviePoster} alt="" srcset="" />
                <p className='absolute top-4 left-4 text-series-font bg-favorite rounded-lg text-xs py-px px-2 font-semibold'>TV SERIES</p>
                <img className='absolute top-4 right-4 bg-favorite p-0.5 rounded-full w-4 h-4' src={favorite} alt="" srcset="" />
              </div>
              <div className='flex flex-col gap-y-2'>
                <div>
                  <p className='text-poster-grey text-xs pt-3'>USA, 2016-Current</p>
                </div>
                <div>
                  <p className='font-bold'>Stranger Things</p>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-2">
                    <img src={imdb} alt='' />
                    <p className='text-rating text-xs'>86.8/100</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={tomato} alt='' />
                    <p className='text-rating text-xs'>97%</p>
                  </div>
                </div>
                <div className='text-poster-grey text-xs'>Action, Adventure, Horror</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedMovie
