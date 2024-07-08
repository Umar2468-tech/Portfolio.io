import React from 'react'
import heroimage from "../Images/heroimage.png.png"
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    
    
  return (
    <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='flex items-center justify-center mx-auto max-w-screen-lg h-full flex-col md:flex-row'>
            <div className='flex flex-col justify-center'>
                <h1 className=' text-5xl font-bold text-white sm:text-7xl'>I'm a FrontEnd Developer</h1>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 1 years of Experience building and designing websites. <br />
                    Currently I love to work to Develop FrontEnd Websites
                    by using these Technologies
                    HTML5 | CSS3 | Javascript | Reactjs | Tailwind Css | Bootsrtap.               
                </p>
                <div>
                    <button className=' group text-white flex items-center w-fit py-2 px-3 my-4 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer bord rounded-md'>
                        Portfolio <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={20} className='ml-2'/></span>
                    </button>
                </div>
            </div>
            <div>
                <img src={heroimage} alt="My Profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
    
  )
  }

export default Home




