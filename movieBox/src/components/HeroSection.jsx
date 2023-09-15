import { useState } from 'react'
import logo from '../assets/tv.png'
import menu from '../assets/Menu.svg'
import tomato from '../assets/tomato.png'
import imdb from '../assets/imdb.png'
import play from '../assets/Play.svg'
import FeaturedMovie from './FeaturedMovie'



export default function HeroSection() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const number = [1,2,3,4,5]

    return (
        <div className="bg-white text-white w-full">
            <header className="w-full bg-auto top-0 bg-hero-pattern bg-no-repeat pb-40  lg:px-8  px-12 py-6">
                <nav className="flex items-center justify-between " aria-label="Global">
                    <div className='flex items-center gap-6'>
                        <img src={logo} alt='logo' />
                        <h1 className='font-semibold text-2xl'>MovieBox</h1>
                    </div>
                    <div className='w-1/2 flex justify-center'>
                        <input 
                            className='bg-transparent text-white placeholder-white::placeholder border-solid border-2 
                                        border-primary rounded-md w-4/5 p-2' 
                            type="search" 
                            name="" 
                            id="" 
                            placeholder='What do you want to watch?' 
                        />
                    </div>
                    <div className="flex items-center gap-6 ">
                        <p className='font-semibold'>Sign in</p>
                        <img src={menu} alt="menu" className='bg-primary rounded-full h-9 w-9 p-1'/>
                    </div>
                </nav>
                <div className='flex justify-between items-center'>
                    <div className='w-1/4 p-2 flex flex-col gap-4'>
                        <div className='text-left pt-16 text-5xl break-words'>
                            <h1 className="leading-tight">John Wick 3 : Parabellum</h1>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <img src={imdb} alt='' />
                                <p>86.8/100</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={tomato} alt='' />
                                <p>97%</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-left leading-normal'>
                                John Wick is on the run after killing a member of the
                                international assassins' guild, and with
                                a $14 million price tag on his head, he
                                is the target of hit men and women everywhere.
                            </p>
                        </div>
                        <div className='flex items-center gap-2 bg-primary w-1/2 p-2 rounded-md'>
                            <img src={play} alt='play' />
                            <p>WATCH TRAILER</p>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        {
                            number.map((num,index) =>(
                                <button>{num}</button>
                            ))
                        }
                    </div>
                </div>
            </header>
            
        </div>
    )
}