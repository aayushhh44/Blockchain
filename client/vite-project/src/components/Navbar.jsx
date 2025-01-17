import React, { useState } from 'react'
import {HiMenuAlt4} from 'react-icons/hi'

import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const[tooggleMenu, setToogleMenu] = useState(false);

  const  NavBarItem = ({title, classProps})=>{
    return(
      <li className={`mx-4 cursor-pointer ${classProps}`}>
        {title}

      </li>
    )
  }
  return (
    <nav className='flex md:justify-center w-full justify-between items-center p-4'>
      {/* <HiMenuAlt4 /> */}
      {/* <AiOutlineCase /> */}

      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <h1>Aayush hero</h1>
        <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {["Market", "Exchange","Tutorials", "Wallets"].map((item, index) =>(
          <NavBarItem key={item + index} title={item} />

        ))}
        <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>Login</li>
        </ul>

        <div className='flex relative'>
          {
            tooggleMenu ? <AiOutlineClose className='text-white md:hidden cursor-pointer' onClick={() => setToogleMenu(false)} fontSize={28} /> : <HiMenuAlt4 className='text-white md:hidden cursor-pointer' onClick={() => setToogleMenu(true)} fontSize={28} />
          }
          {
            tooggleMenu && (
              <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
                <li className='text-xl w-full my-2'><AiOutlineClose onClick={() => setToogleMenu(false)}/></li>
                {["Market", "Exchange","Tutorials", "Wallets"].map((item, index) =>(
          <NavBarItem key={item + index} title={item} classProps='my-2 text-lg' />

        ))}

              </ul>
            )
          }

        </div>

      </div>


    </nav>
  )
}

export default Navbar
