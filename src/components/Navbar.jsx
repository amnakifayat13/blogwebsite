
"use client"
import React, {useState} from 'react'
import Link from "next/link";
import Image from "next/image";
import {AiOutlineClose } from "react-icons/ai"
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';


const Navbar = () => {

  const {data: session, status} = useSession()
  const pathname = usePathname();
const [showDropdown, setShowDropdown] = useState(false)
const handleShowDropdown = () => setShowDropdown(prev => true)
const handleHideDropdown = () => setShowDropdown(prev => false)
  const loggedIn = false;
  return (
    <div className="container py-2 h-16 flex items-center justify-between">
      <Link href="/">
      <h2>
        AmKi<span  className='special-word'>Code.</span>
        </h2>
        </Link>
        <ul className='flex items-center gap-3'>
          <li>
            <Link href="/blog" className={pathname === "/blog" ? "text-primaryColor font-bold" : ""}>Blog</Link>
          </li>
          {
            session?.user?(
              <>
              <li>
            <Link href="/create-blog" className={pathname === "/create-blog" ? "text-primaryColor font-bold" : ""}>Create</Link>
          </li>
          <li>
           <div className='relative'>
            <Image
            onClick={handleShowDropdown}
            src="/pro.jpg"
            alt="avatar"
            sizes='100vw'
            width={50}
            height={50}
            className='w-10 h-10 rounded-full cursor-pointer'/>
            {
            showDropdown && (
              <div className='absolute top-0 right-0 bg-primaryColorLight p-5'>
                <AiOutlineClose onClick={handleHideDropdown} className='w-full cursor-pointer'/>
                <button onClick={ () => {signOut(); handleHideDropdown();}}>Logout</button>
                <Link onClick={handleHideDropdown} href="/user">Profile</Link>

              </div>
            )}

            </div>
          </li>
         
              </>
            ):(
              <>
              <li>
            <Link href="/logIn" className={pathname === "/logIn" ? "text-primaryColor font-bold" : ""}>Log In</Link>
          </li>
          <li>
            <Link href="/signUp" className={pathname === "/signUp" ? "text-primaryColor font-bold" : ""}>Sign Up</Link>
          </li>
              </>
            )
          }
          
        </ul>
    </div>
  )
}

export default Navbar
