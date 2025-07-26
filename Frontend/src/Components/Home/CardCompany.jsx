import { MapPin, Briefcase } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";


import { HiOutlineBadgeCheck } from "react-icons/hi";
import { useFetchCompanies } from "../../hooks/useCompany.js";
import CardCompanySkeleton from "../loading/CardCompanySkeleton.jsx";

const CardCompany = () => {
  const { data, isLoading, error } = useFetchCompanies();

  if (isLoading) return <CardCompanySkeleton></CardCompanySkeleton>;
  if (error) return <p>Something went wrong: {error.message}</p>;
  const companies = data?.companies || [];

  return (
    <div className="">
      <Swiper
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        spaceBetween={20}
      >
        {companies?.map((company) => (
          <SwiperSlide key={company.id}>
            <div className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 my-4 lg:p-0 p-1">
              {/* Banner */}
              <div className="relative">
                <img
                  src={company?.cover }
                  alt={`${company.name} Banner`}
                  className="lg:h-[195px] w-full object-cover"
                />
                <div className="absolute top-2 left-2">
                  <HiOutlineBadgeCheck className="text-2xl text-blue-600" />
                </div>
              </div>

              {/* Info */}
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <img
                    src={company?.logo }
                    alt={`${company.name} Logo`}
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  <h2 className="text-lg font-semibold">{company?.name}</h2>
                </div>

                <div className="flex items-center text-gray-600 text-sm gap-1">
                  <div className="flex justify-between  items-center text-gray-600 text-sm gap-2">
                    <MapPin size={16} />
                    <span>
                      {company?.city},{company?.location}
                    </span>
                  </div>
                </div>

                <div className="flex justify-end items-center text-sm mt-2">
                
                  <button className="text-sm font-medium bg-r-primary text-white py-2 px-3 rounded-lg hover:bg-r-accent transition">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCompany;
