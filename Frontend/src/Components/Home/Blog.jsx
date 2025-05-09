import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'

export const Blog = () => {
    const {error,data:blogs=[]}=useQuery({
        queryKey:['blogs'],
        queryFn:async()=>{
            const res=await axios.get('/blog.json')
            return res.data.data
        }

    })


   const {author, comments,title,details,
excerpt,id,date


   }=blogs

    
  return (
    <div className='container mx-auto '>Blog
    
    </div>
  )
}
