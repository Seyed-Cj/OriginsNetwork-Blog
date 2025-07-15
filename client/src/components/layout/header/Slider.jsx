import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Slider() {
  const slides = [
    {
      id: 1,
      image: '/images/exmp2.jpg',
      title: 'دوره‌های تخصصی',
      description: 'آموزش‌های کاربردی و پروژه‌محور'
    },
    {
      id: 2,
      image: '/images/exmp2.jpg',
      title: 'مدرس‌های حرفه‌ای',
      description: 'با بهترین مدرس‌های صنعت'
    },
    {
      id: 3,
      image: '/images/exmp2.jpg',
      title: 'پشتیبانی دائمی',
      description: 'همراه شما تا رسیدن به نتیجه'
    }
  ];
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-2xl my-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
        dir="rtl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 right-10 text-white z-20 text-right max-w-md">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg md:text-xl mb-6">{slide.description}</p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                مشاهده جزئیات
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
