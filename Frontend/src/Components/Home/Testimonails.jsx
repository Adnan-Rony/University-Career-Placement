import React from "react";
import { SectionTitle } from "../Shared/SectionTitle";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../Components/Home/testimonial.css";

export const Testimonails = () => {
  const {
    isPending,
    error,
    data: testimonails = [],
  } = useQuery({
    queryKey: ["clienttestimonails"],
    queryFn: async () => {
      const res = await axios.get("/testimonial.json");
      return res.data.data;
    },
  });

  console.log(testimonails);

  if (isPending) {
    return <h1>loading</h1>;
  }

  return (
    <div className="container mx-auto py-16 testimonial-slider" id="sw">
      <SectionTitle
        title={"Clents Testimonial"}
        subtitle={"What A Job Holder Says About Us."}
      ></SectionTitle>

      <Swiper
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          220: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper "
      >
        {testimonails.map((testimonial) => (
          <SwiperSlide className="" key={testimonial.id}>
            <div className="bg-r-secondary p-6 rounded-xl mx-14 h-64 flex flex-col justify-between">
              <h2 className="text-lg font-semibold mb-3">
                {testimonial.testimonial}
              </h2>

              <div className="flex items-center gap-4 mt-4">
                <div className="h-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-md font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
