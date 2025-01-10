import React from 'react'
import Image from "next/image"

const FirstBlog = ({FirstBlog}) => {
  return (
    <section >
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full lg:w-2/5">
            <Image src="firstblog.jpeg"
            alt="first blog"
            width={}
            height={}/>
            </div>
        </div>
    </section>
  )
}

export default FirstBlog
