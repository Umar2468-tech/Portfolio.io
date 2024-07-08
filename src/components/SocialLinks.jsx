import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
const list =[
  {
    id:1,
    child:(
      <>
            LinkedIn<FaLinkedin size={30}/>
            </>
    ),
    href : 'https://www.linkedin.com',
      style : 'rounded-tr-md'
  },
  {
    id:2,
    child:(
      <>
            Github<FaGithub size={30}/>
            </>
    ),
    href : 'https://github.com',
      // style : 'rounded-tr-md'
  },
  {
    id:3,
    child:(
      <>
            Mail<HiOutlineMail size={30}/>
            </>
    ),
    href : 'mailto:muhammadumer030977@gmail.com',
      // style : 'rounded-tr-md'
      
  },{
    id:4,
    child:(
      <>
            Resume<BsFillPersonLinesFill size={30}/>
            </>
    ),
    href : '/Resume.pdf',
      style : 'rounded-br-md',
  }
]

  return (
    <div className=' flex hidden lg:flex  flex-col top-[35%] left-0 fixed'>
      <ul>
        {list.map(({id, child, style, href})=>(
          <li key={id} className={"flex justify-between w-40 h-10 bg-gray-500 items-center px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]"}
          >
          <a href={href} className='flex justify-between w-full items-center text-white'>
            {child}
            </a>
            </li>
        ))}
        
      </ul>
    </div>
  )
}

export default SocialLinks