import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

const images = [
    'https://i.ibb.co.com/KcqpbbfZ/nesco.jpg',
    'https://i.ibb.co.com/0V9GDyQ3/titas-gas.png',
    'https://i.ibb.co.com/v6cNSVVB/wasa.jpg',
    'https://i.ibb.co.com/Rkq6HZjy/link3.png',
    'https://i.ibb.co.com/zhS0vSSV/desco.jpg',
    'https://i.ibb.co.com/6JvFTDC7/ah-college.jpg',
    'https://i.ibb.co.com/fzx0HRsy/credit-card.jpg',
    'https://i.ibb.co.com/zh7Pyfc1/akash.jpg',
    'https://i.ibb.co.com/p6qV210k/amber-it.jpg',
];

const HeaderSlider = () => {
    return (

        <div className=" w-full mx-auto py-25 md:px-20 bg-gradient-to-r from-blue-50 to-indigo-100">
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 120,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="swiper_container"
            >
                {images.map((img, index) => (
                    <SwiperSlide
                        key={index}
                        className="max-w-xs rounded-2xl overflow-hidden shadow-lg"
                    >
                        <img
                            src={img}
                            alt={`slide-${index}`}
                            className="w-60 md:w-full mx-auto h-60 md:h-auto object-center rounded-2xl"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeaderSlider;
