import React from 'react'
import { SectionTitle } from '../Shared/SectionTitle'

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export const Testimonails = () => {
       const {isPending,error,data:testimonails=[]}=useQuery({
        queryKey:['clienttestimonails'],
        queryFn:async()=>{
            const res=await axios.get('/testimonial.json')
            return res.data.data
        }

    })

    console.log(testimonails);

      if (isPending) {
    return <h1>loading</h1>
  }
    
  return (
    <div className='container mx-auto py-16'>
 <SectionTitle 
 title={'Clents Testimonial'}
 subtitle={'What A Job Holder Says About Us.'}
 ></SectionTitle>

<Swiper
   pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
>

   
        {
            testimonails.map((testimonial)=><SwiperSlide
             key={testimonial.id}>

                <h2>
                    {testimonial.testimonial}
                </h2>

            </SwiperSlide>)
        }
 
    
</Swiper>

    </div>
  )
}
