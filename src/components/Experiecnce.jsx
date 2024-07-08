import React from 'react'
import css from "../Images/css.png"
import github from "../Images/github.png"
import graphql from "../Images/graphql.png"
import html from "../Images/html.png"
import javascript from "../Images/javascript.png"
import nextjs from "../Images/nextjs.png"
import node from "../Images/node.png"
import react from "../Images/react.png"




const Experiecnce = () => {
const images =[
    {
        id:1,
        src : css,
        title : "CSS3",
        style : "shadow-blue-500",
    },
    {
        id:2,
        src : github,
        title : "Github",
        style : "shadow-orange-500",

    },
    {
        id:3,
        src : graphql,
        title : "GraphQl",
        style : "shadow-pink-500",
    },
    {
        id:4,
        src : javascript,
        title : "JavsScript",
        style : "shadow-yellow-500",
    },
    {
        id:5,
        src : nextjs,
        title : "NextJs",
        style : "shadow-white",
    },
    {
        id:6,
        src : node,
        title : "Node",
        style : "shadow-green-500",
    },
    {
        id:7,
        src : react,
        title : "React",
        style : "shadow-blue-500",
    },
    {
        id:8,
        src : html,
        title : "HTML5",
        style : "shadow-orange-500",
    },
    
]

  return (
    <div name="experience" className='w-ful h-full bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='flex flex-col w-full h-full max-w-screen-lg mx-auto p-4 justify-center'>
            <div className='pb-8'>
                <p className='text-4xl inline border-b-4 border-gray-500 font-bold'>Experience</p>
                <p className='py-8'>These are the Technologies that I've worked with</p>
            </div>
            <div className=' w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {images.map(({id, src, title, style})=>(
                    <div key={id} className={`shadow-md  hover:scale-110 duration-500 rounded-lg py-6 ${style}`}>
                    <img src={src} alt=""  className='rounded-md duration-300 hover:scale-105 cursor-pointer w-20 mx-auto'  />
                    <p className='flex items-center justify-center mt-4'>{title}</p>
                </div>

                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experiecnce