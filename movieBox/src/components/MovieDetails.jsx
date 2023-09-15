import React from 'react'
import '../App.css'
import logo from '../assets/tv.png'
import home from '../assets/Home.png'
import calendar from '../assets/Calendar.png'
import tvshow from '../assets/TVShow.png'
import movieprojector from '../assets/MovieProjector.png'
import logout from '../assets/Logout.png'
import video from '../assets/video.jpg'
import play from '../assets/Play.png'
import star from '../assets/Star.png'

function MovieDetails() {
  return (
    <div className='grid grid-rows-3 grid-cols-12 lg:px-16  px-16 py-6'>
      <div className='row-span-6 col-span-2 border border-detail-menu border-solid py-12 px-5' style={{ borderRadius: '0 2.5rem 2.5rem 0' }}>
        <div className='flex items-center gap-6'>
          <img src={logo} alt='logo' />
          <h1 className='font-semibold text-2xl'>MovieBox</h1>
        </div>
        <div className='flex flex-col justify-between items-center gap-y-14 mt-24 mb-20'>
          <div className='flex'>
            <img src={home} alt='home' className='' />
            <button> Home</button>
          </div>
          <div className='flex'>
            <img src={movieprojector} alt='home' className='' />
            <button>Movies</button>
          </div>
          <div className='flex'>
            <img src={tvshow} alt='home' className='' />
            <button>TV Series</button>
          </div>
          <div >
            <img src={calendar} alt='home' className='' />
            <button>Upcoming</button>
          </div>




        </div>
        <div className=' flex flex-col justify-between items-center gap-y-7 border border-solid border-play-games rounded-2xl pb-4 pt-8'>
          <p className='text-sm m'>Play movie quizes<br />and earn<br />free tickets</p>
          <p className='text-xs'>50k people are playing<br />now</p>
          <button className='text-xs text-primary font-semibold bg-play rounded-xl py-1 px-2'>Start playing</button>
        </div>
        <div className='flex justify-center items-center pt-10'>
          <img src={logout} alt="Logout" srcset="" />
          <p>Log out</p>
        </div>
      </div>
      <div className='w-full col-start-3 col-span-full pl-6 pt-8'>
        <div className='w-full relative'>
          <img className='w-full rounded-xl' src={video} alt="video" srcset="" />
          <img className='video-play-position bg-video-play rounded-full p-3' src={play} alt="video" srcset="" style={{
            position: 'absolute',
            top: '40%',
            left: '47%',
          }} />
        </div>
          

        <div className="flex justify-between pt-6">
          <div className='flex font-semibold justify-between' style={{ color: '#404040'}}>
            <div>
              <span >Top Gun: Maverick</span>
              <span > • </span>
              <span> 2022 </span>
              <span > • </span>
              <span > PG-13 </span>
              <span > • </span>
              <span > 2h 10m </span>
            </div>

            <div className='flex justify-between text-xs text-genre font-semibold justify-self-start' style={{ width: '12%' }}>
              <span className='border-genre border border-solid py-px px-3 rounded-xl'>Action</span>
              <span className='border-genre border border-solid py-px px-3 rounded-xl'>Drama</span>
            </div>
          </div>
          
          
          <div className='flex border-2'>
            <img className='self-center h-5 w-5 pr-1' src={star} alt="rating" srcset="" />
            <span className='font-semibold' style={{ color: '#E8E8E8'}}> 8.5 </span>
            <span className='font-semibold' style={{ color: ' #666666' }} >| 350k</span>
          </div>
        </div>
      </div>
      <div className='col-start-3'>rrrrr</div>
    </div>
  )
}

export default MovieDetails
