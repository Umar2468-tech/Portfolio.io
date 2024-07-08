import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav]=useState(false)
  const List = [
    {
      id : 1,
      list : "Home" 
    },

    {
      id : 2,
      list : "About" 
    },

    {
      id : 3,
      list : "Portfolio" 
    },

    {
      id : 4,
      list : "Services" 
    },

    {
      id : 5,
      list : "ContactUs" 
    },
  ]
  return (
    <div className='flex justify-between w-full h-16 bg-black text-white'>
      <div>
        <h1 className='text-4xl font-signature font-medium mt-6 ml-6'>M.Umar</h1>
      </div>
      <ul className='hidden md:flex'>
        {
          List.map(({id, list})=>(
            <li key={id} className=' text-gray-500 hover:scale-125 duration-300 mr-8 mt-6 cursor-pointer'>{list}</li>
            
            ))
          }
        
          </ul>

          <div  onClick={()=>setNav(!nav)} className="text-gray-500 mt-6 mr-20 cursor-pointer z-10 md:hidden">
            {
              nav? 
              <FaTimes size={23}/>:
            <FaBars size={23}/>
            }

          </div>
          {nav &&(
          <ul className='flex flex-col absolute top-0 left-0 h-full w-screen bg-gradient-to-b from-black to-gray-800  items-center justify-center'>
          {
          List.map(({id, list})=>(
            <li key={id} className=' text-4xl text-gray-500 hover:scale-125 duration-300 mr-8 mt-2.5 cursor-pointer'>{list}</li>

            
            ))
          }
            
          </ul>

          )}


          
          
    </div>
  )
}

export default Navbar