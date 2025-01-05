import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='container h-screen flex flex-col gap-5 justify-center items-center'>
        <h2>Not Found</h2>
        <p>could not find requested resource</p>
        <Link href="/">Return Home</Link>
     
    </div>
  )
}

export default NotFound
