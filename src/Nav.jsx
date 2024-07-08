import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav]=useState(false)
  const List =[
    {
      id:1,
      list:"Home"
    },
    {
      id:2,
      list:"Experience"
    },
    {
      id:3,
      list:"Portfolio"
    },
    {
      id:4,
      list:"Services"
    },
    {
      id:5,
      list:"Contact"
    },
  ]
  return (
    <div className="flex justify-between w-full h-18 bg-black text-white">
      <div>
        <h1 className='text-4xl font-signature font-bold ml-10 mt-2'>M.Umar</h1>
      </div>
      <ul className='hidden md:flex'>

        {
          List.map(({id, list})=>(
            <li key={id} className='font-medium mt-3 mr-3 capitalize text-gray-500 hover:scale-125 duration-200 cursor-pointer px-4'>
              {list}
              </li>

          ))
        }
        
      </ul>
      <div onClick={()=>setNav(!nav)} className='pt-2 pr-14 cursor-pointer z-10 text-gray-500 md:hidden'>
        {
          nav?<FaTimes size={25}/> : 
          <FaBars size={25}/>
        }
      </div>

      {
        nav&&(
      <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>

      {
          List.map(({id, list})=>(
            <li key={id} className='text-4xl capitalize flex-col text-gray-500 hover:scale-110 duration-200 cursor-pointer mt-6'>
              {list}
              </li>

          ))
        }
        


      </ul>

        )
      }

    </div>
  )
}

export default Navbar;