import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  FaBolt, FaFire, FaRegCreditCard, FaTv,
  FaUniversity, FaWifi
} from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Icon mapper
const getBillIcon = (type) => {
  const lower = type.toLowerCase();
  if (lower === "electricity") return <FaBolt className="text-yellow-500 text-2xl" />;
  if (lower === "water") return <IoWater className="text-blue-500 text-2xl" />;
  if (lower === "gas") return <FaFire className="text-red-500 text-2xl" />;
  if (lower === "tuition") return <FaUniversity className="text-green-600 text-2xl" />;
  if (lower === "internet") return <FaWifi className="text-indigo-500 text-2xl" />;
  if (lower === "creditcard") return <FaRegCreditCard className="text-green-500 text-2xl" />;
  if (lower === "satellitetv") return <FaTv className="text-blue-400 text-2xl" />;
  return null;
};

const TopBillersSlider = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch("bills.json") // <-- Replace this with your actual JSON path
      .then((res) => res.json())
      .then((data) => setBills(data))
      .catch((err) => console.error("Error fetching bills:", err));
  }, []);

  if (!bills || bills.length === 0) {
    return <p className="text-center text-gray-500 py-10">Loading billers...</p>;
  }

  return (
    <div className="bg-[#f5f9ff] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Custom navigation buttons */}
        <div className="absolute top-1/2 left-5 z-10 transform -translate-y-1/2">
          <div className="swiper-button-prev">
            <FaArrowLeft />
          </div>
        </div>
        <div className="absolute top-1/2 right-5 z-10 transform -translate-y-1/2">
          <div className="swiper-button-next z-10">
            <FaArrowRight/>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          {bills.map((bill) => (
            <SwiperSlide key={bill.id}>
              <div className="h-[500px] bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center overflow-hidden border border-blue-100">

                {/* Left: Image */}
                <div className="md:w-1/2 w-full h-full flex items-center justify-center p-4">
                  <img
                    src={bill.icon}
                    alt={bill.organization}
                    className="max-h-60 object-contain"
                  />
                </div>

                {/* Right: Content */}
                <div className="md:w-1/2 w-full h-full bg-[#eaf3ff] px-8 py-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-blue-700 font-semibold text-lg mb-2">
                    {getBillIcon(bill.bill_type)}
                    <span className="capitalize">{bill.bill_type}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-2">{bill.organization}</h2>
                  <p className="text-gray-600 text-base mb-4">
                    Conveniently pay your {bill.bill_type.toLowerCase()} bills to {bill.organization} with Quick Pay.
                  </p>
                  <button className="px-5 py-2 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition font-medium w-fit">
                    Pay Now
                  </button>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopBillersSlider;
