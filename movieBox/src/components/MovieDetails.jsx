import React, {useState, useEffect} from 'react'
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
import ticket from '../assets/Tickets.png'
import list from '../assets/List.png'
import listWhite from '../assets/ListWhite.png'
import rectangleMovie from '../assets/RectangleMovie.png'
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  const MOVIE_DETAIL = `https://api.themoviedb.org/3/movie/${id}`;
  const VIDEO_DETAIL = `https://api.themoviedb.org/3/movie/${id}/videos`;
  console.log(id)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTk3NzBmOTJhOTgwMjAzNzU1MmM3OWE5ZWEzOTYyOCIsInN1YiI6IjY1MDU3YmIzM2NkMTJjMDBlYjQ0MDI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HXMj0feCbQ2WBoHqk7TAZy-18ksuhW_PuAtIxbQpxRs'
    }
  };

  function convertToUTC(date) {
    const inputDate = new Date(date);

    // Convert the date to UTC
    const utcDate = new Date(
      inputDate.getUTCFullYear(),
      inputDate.getUTCMonth(),
      inputDate.getUTCDate(),
      inputDate.getUTCHours(),
      inputDate.getUTCMinutes(),
      inputDate.getUTCSeconds()
    );
    return utcDate.toISOString()
  }

  

  useEffect(() => {
    setIsLoading(false)
    fetch(MOVIE_DETAIL, options)
      .then(response => {
        return response.json()}
        )
      .then(response => {
        setMovies(response)
        console.log(response)
        return response
      })
      .catch(err => console.error(err));
  }, []);

  // const filteredMovie = movies.filter(movie => movie.id == id)

  console.log(movies)

  return (
    <>
      {isLoading ? <p>loading</p> :
        <div className='grid grid-cols-12 lg:px-16  px-16 py-6'>
          <div className='row-span-2 col-span-2 border border-detail-menu border-solid pt-12 px-5' style={{ borderRadius: '0 2.5rem 2.5rem 0' }}>
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
              <div className='flex font-semibold justify-between' style={{ color: '#404040' }}>
                <div>
                  <span data-testid='movie-title' >{movies.title}</span>
                  <span > • </span>
                  <span data-testid='movie-release-date'> {new Date(Date.UTC(1994, 8, 23)) } </span>
                  <span > • </span>
                  <span > PG-13 </span>
                  <span > • </span>
                  <span data-testid='movie-runtime'> 2h 10m </span>
                </div>

                <div className='flex justify-between gap-x-4 text-xs text-genre font-semibold justify-self-start' style={{ width: '12%' }}>
                  <span className='border-genre border border-solid py-px px-3 rounded-xl'>Action</span>
                  <span className='border-genre border border-solid py-px px-3 rounded-xl'>Drama</span>
                </div>
              </div>


              <div className='flex '>
                <img className='self-center h-5 w-5 pr-1' src={star} alt="rating" srcset="" />
                <span className='font-semibold' style={{ color: '#E8E8E8' }}> </span>
                <span className='font-semibold' style={{ color: ' #666666' }} >| 350k</span>
              </div>
            </div>
          </div>
          <div className='flex justify-between col-start-3 col-span-full pl-6 pt-8'>
            <div className='w-2/3'>
              <p data-testid='movie-overview' className='leading-snug mb-8'>
                After thirty years, Maverick is still pushing the envelope as a top naval aviator,
                <br />but must confront ghosts of his past when he leads TOP GUN's elite graduates
                <br />on a mission that demands the ultimate sacrifice from those chosen to fly it.
              </p>
              <div>
                <div className='mb-4'>Director :<span className='text-primary'> Joseph Kosinski</span></div>
                <div className='mb-4'>Writers :<span className='text-primary'> Jim Cash, Jack Epps Jr, Peter Craig</span></div>
                <div className='mb-4'>Stars :<span className='text-primary'> Tom Cruise, Jennifer Connelly, Miles Teller</span></div>
              </div>
              <div className='flex rounded-md w-4/5 border gap-x-3 border-solid border-red'>
                <div className='rounded-md bg-primary text-white px-3'>Top rated movie #65</div>
                <select className=''>
                  <option value="">Awards 9 nominations</option>
                </select>
              </div>
            </div>
            <div className=''>
              <div className='w-full'>
                <button className='w-full flex bg-primary text-white text-sm rounded-md justify-center gap-x-2 items-center mb-4 px-8 py-1'> <img src={ticket} alt="ticket" srcset="" /><span>See Showtimes</span></button>
                <button className='w-full flex bg-play text-sm rounded-md justify-center  gap-x-2 items-center px-8 py-1 mb-8'> <img src={list} alt="list" srcset="" /><span>See Showtimes</span></button>
              </div>

              <div className='relative'>
                <img src={rectangleMovie} alt="see more movies" />
                <button className='flex absolute bottom-0 justify-center gap-x-2 py-2 px-4 w-full items-center rounded-lg text-sm' style={{ background: 'rgba(18, 18, 18, 0.50)', color: 'white' }}> <img src={listWhite} alt="list" srcset="" /><span className='text-white'>The Best Movies and Shows in September</span></button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
    
  )
}

export default MovieDetails
