import React from 'react'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'

function Footer() {
    return (
        <div className='mt-40 mb-20 flex flex-col justify-center items-center gap-y-9'>
            <div className="flex justify-center items-center gap-x-12">
                <a href="http://" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" srcset="" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" srcset="" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" srcset="" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="" srcset="" /></a>
            </div>
            <div className="flex justify-center items-center gap-x-12 font-semibold text-series-font">
                <p className='text-lg'>Conditions of Use</p>
                <p className='text-lg'>Privacy & Policy</p>
                <p className='text-lg'>Press Room</p>
            </div>
            <div className="flex justify-center items-center gap-x-12 font-semibold text-copyright">
                <p className='text-lg'> &copy; 2021 MovieBox by Adriana Eka Prayudha</p>
            </div>
        </div>
    )
}

export default Footer
