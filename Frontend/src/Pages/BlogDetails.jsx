import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router'

export const BlogDetails = () => {
    const {id}=useParams()
        const {isPending,error,data:AllBlogs=[]}=useQuery({
        queryKey:['blogs'],
        queryFn:async()=>{
            const res=await axios.get('/blog.json')
            return res.data.data
        }

    })
    

    const BlogDetails=AllBlogs.find(blog=>parseInt(blog.id)===parseInt(id))
    console.log(BlogDetails);


    if(isPending){
        return <h1>Loading......</h1>
    }
   if (!BlogDetails) {
  return <h1>Blog not found</h1>;
}
  return (
    <div className='container mx-auto py-16 space-y-4'>
  <h1 className=' md:text-3xl lg:text-5xl font-black'>{BlogDetails.title}</h1>
<div className='flex items-center gap-2 '> 
    <img className='h-16 w-16 object-cover rounded-full' src={BlogDetails.authorImg} alt="" />
      <div>
         <p className='text-xl font-medium '> {BlogDetails.author}</p>
         <p className='text-lg font-medium text-gray-500'>
             {BlogDetails.date}</p>
      
      </div>
</div>
<div>
    <img src={BlogDetails.thumbnail} alt="" />
</div>
    </div>
  )
}
