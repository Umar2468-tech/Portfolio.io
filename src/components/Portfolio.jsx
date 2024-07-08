import React from 'react'
import installNode from "../Images/Portfolio/installNode.jpg"
import arrayDestruct from "../Images/Portfolio/arrayDestruct.jpg"
import navbar from "../Images/Portfolio/navbar.jpg"
import reactParallax from "../Images/Portfolio/reactParallax.jpg"
import reactSmooth from "../Images/Portfolio/reactSmooth.jpg"
import reactWeather from "../Images/Portfolio/reactWeather.jpg"



const Portfolio = () => {

const images = [
    {
        id : 1,
        src : arrayDestruct ,
    },
    {
        id : 2,
        src : installNode ,
    },

    {
        id : 3,
        src : navbar ,
    },
    {
        id : 4,
        src : reactParallax ,
    },
    {
        id : 5,
        src : reactSmooth ,
    },
    {
        id : 6,
        src : reactWeather ,
    },

]

    
    
    return (
        <div className='w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
            <div className='flex flex-col w-full h-full max-w-screen-lg mx-auto p-4 justify-center'>
                <div className='pb-8'>
                    <p className='text-4xl inline border-b-4 border-gray-500 font-bold'>Portfolio</p>
                    <p className='py-8'>Ceckout My Some Works</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {images.map(({id, src})=>(
                        <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-300 hover:scale-105 cursor-pointer' />
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105'>Code</button>

                        </div>
                    </div>

                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Portfolio