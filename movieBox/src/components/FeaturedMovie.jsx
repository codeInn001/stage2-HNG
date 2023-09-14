import React from 'react'
import right from '../assets/Chevronright.svg'

function FeaturedMovie() {
  return (
    <div>
        <div>
            <h2 className='text-black'>Featurd Movie</h2>
            <div>
                <p>See more</p>
                <img src={right} alt="" srcset="" />
            </div>
        </div>
    </div>
  )
}

export default FeaturedMovie
