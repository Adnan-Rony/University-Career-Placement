import { MapPin, Briefcase } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

import img1 from "../../assets/download.png";
import img2 from "../../assets/360_F_516276029_aMcP4HU81RVrYX8f5qCAOCCuOiCsu5UF.JPG";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { useFetchCompanies } from "../../hooks/useCompany.js";
import CardCompanySkeleton from "../loading/CardCompanySkeleton.jsx";

const CardCompany = () => {
  const { data, isLoading, isError } = useFetchCompanies();

  if (isLoading) return <CardCompanySkeleton></CardCompanySkeleton>;

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
        {data.companies.map((company) => (
          <SwiperSlide key={company.id}>
            <div className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 my-4 lg:p-0 p-1">
              {/* Banner */}
              <div className="relative">
                <img
                  src={company.cover || img1}
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
                    src={company.logo || img2}
                    alt={`${company.name} Logo`}
                    className="w-8 h-8 object-contain"
                  />
                  <h2 className="text-lg font-semibold">{company.name}</h2>
                </div>

                <div className="flex items-center text-gray-600 text-sm gap-1">
                  <div className="flex justify-between  items-center text-gray-600 text-sm gap-2">
                    <MapPin size={16} />
                    <span>{company.location || "Unknown"}</span>
                  </div>
                </div>

                <div className="flex justify-end items-center text-sm mt-2">
                  {/* <div className="flex items-center gap-1 text-blue-600 font-medium">
                    <Briefcase size={16} />
                    <span>industry {company.industry}</span>
                  </div> */}
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
