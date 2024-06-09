'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  const navigate = (page) =>{
    router.push(page)
  }
  return (
   <section>
    <h1>useRouter</h1>
    <div className=' flex space-x-4'>

    <button className='border px-2 py-1.5 bg-gray-50' onClick={()=>navigate("about")}>
      Go to about page
    </button>
   
    <button className='border px-2 py-1.5 bg-gray-50' onClick={()=>navigate("login")}>
      Go to login page
    </button>

    </div>
   </section>
  )
}

export default Home