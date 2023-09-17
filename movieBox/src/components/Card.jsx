import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import moviePoster from '../assets/moviePoster.png'
import favorite from '../assets/Heart.svg'
import tomato from '../assets/tomato.png'
import imdb from '../assets/imdb.png'
import redheart from '../assets/red-heart-11121.svg'

function Card({movie, index}) {
    const [src, setSrc] = useState(favorite)
    const [isFavorite, setIsFavorite] = React.useState(false);
    const imageAPI = "https://image.tmdb.org/t/p/w300"

    function handleFavorite(e) {
        e.preventDefault()
        setIsFavorite(prev => !prev)
        console.log(isFavorite)

        e.target.src = isFavorite ? redheart : favorite

    }

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



return(


    <Link to={`movies/${movie.id}`}>
        <div data-testid="movie-card"  id={movie.id} className='' key={index}>
            <div className='relative'>
                <img data-testid='movie-poster' className='' src={imageAPI + movie.poster_path} alt="" srcset="" />
                <p className='absolute top-4 left-4 text-series-font bg-favorite rounded-lg text-xs py-px px-2 font-semibold'>TV SERIES</p>
                <img id={movie.id} className='absolute top-4 right-4 bg-favorite p-0.5 rounded-full w-4 h-4' src={src} alt="" srcset="" onClick={(e) => handleFavorite(e)} />
            </div>
            <div className='flex flex-col gap-y-2'>
                <div>
                    <p data-testid='movie-release-date' className='text-poster-grey text-xs pt-3'>{new Date(movie.release_date).toUTCString()}</p>
                </div>
                <div>
                    <p data-testid='movie-title' className='font-bold text-[rgb(0,0,0)]'>{movie.title}</p>
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
}
export default Card