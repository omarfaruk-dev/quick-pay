import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { FaUniversity, FaBolt, FaFire, FaWifi, FaRegCreditCard, FaTv } from "react-icons/fa";

import { IoWater } from "react-icons/io5";

const services = [
    { name: "Electricity Bill", icon: <FaBolt className="text-yellow-500 text-5xl" /> },
    { name: "Internet Bill", icon: <FaWifi className="text-blue-300 text-5xl" /> },
    { name: "Tuition Fees", icon: <FaUniversity className="text-green-600 text-5xl" /> },
    { name: "Gas Bill", icon: <FaFire className="text-red-500 text-5xl" /> },
    { name: "Water Bill", icon: <IoWater className="text-blue-500 text-5xl" /> },
    { name: "Satellite Tv Bill", icon: <FaTv className="text-purple-500 text-5xl" /> },
    { name: "Credit Card Bill", icon: <FaRegCreditCard className="text-green-600 text-5xl" /> },
];

const ServiceCarousel = () => {
    return (
        <div className=" px-4 py-10 bg-gradient-to-r from-blue-50 to-indigo-100" >
            {/* <h3 className="text-center text-lg font-semibold py-4">
        Bill Payment Services We Provide
      </h3> */}
            <h2 className="text-xl lg:text-3xl font-bold text-center text-gray-800">Bill Pay Service We Provide</h2>
            {/* <hr className="border-t-2 border-dashed border-blue-700 w-1/4 mx-auto" /> */}
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={5}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                className="h-[240px] mt-4"
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="mb-3">{service.icon}</div>
                            <p className="text-sm text-gray-800 font-medium">{service.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ServiceCarousel;
