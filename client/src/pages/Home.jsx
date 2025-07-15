import BlogSlider from '../components/blog/BlogSlider'
import Footer from '../components/layout/footer/footer'
import Header from '../components/layout/header/Header'
import FollowUs from '../components/common/FollowUs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/mousewheel'


export default function Home() {

  const blogPosts = [
    {
      id: 1,
      category: 'آموزش برنامه‌نویسی',
      title: 'آموزش هوک‌های ری‌اکت در 10 دقیقه',
      excerpt: 'یادگیری سریع و کاربردی هوک‌های useState و useEffect در ری‌اکت برای توسعه‌دهندگان',
      date: '۱۰ روز پیش',
      comments: 39,
      image: '/images/exmp.svg'
    },
    {
      id: 2,
      category: 'توسعه وب',
      title: 'بهترین روش‌های سئو در ۲۰۲۳',
      excerpt: 'آخرین تکنیک‌های بهینه‌سازی موتورهای جستجو برای توسعه‌دهندگان فرانت‌اند',
      date: '۱۰ ساعت پیش',
      comments: 9,
      image: '/images/exmp.svg'
    },
    {
      id: 3,
      category: 'بانک اطلاعاتی',
      title: 'مقایسه MongoDB و PostgreSQL',
      excerpt: 'بررسی کامل تفاوت‌های بانک‌های اطلاعاتی NoSQL و رابطه‌ای برای انتخاب بهترین گزینه',
      date: '۲ روز پیش',
      comments: 24,
      image: '/images/exmp.svg'
    },
    {
      id: 4,
      category: 'الگوریتم',
      title: 'ساختارهای داده پیشرفته در جاوااسکریپت',
      excerpt: 'پیاده‌سازی درخت‌ها، گراف‌ها و ساختارهای پیچیده در جاوااسکریپت',
      date: '۵ روز پیش',
      comments: 15,
      image: '/images/exmp.svg'
    }
  ];
  return (
    <div className='bg-gray-50 dark:bg-zinc-800'>
      <Header />

      <BlogSlider blogPosts={blogPosts} />

      <FollowUs />

      <BlogSlider blogPosts={blogPosts} />

      <div className="container flex gap-6 py-12">
        {/* اسلایدر اصلی با Mousewheel */}
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={20}
          mousewheel={true}
          modules={[Mousewheel]}
          className="h-96 rounded-lg w-[75%]"
        >
          {[...Array(6)].map((_, i) => (
            <SwiperSlide
              key={i}
              className="bg-red-400 text-white rounded-lg flex items-center justify-center text-xl h-24"
            >
              Slide {i + 1}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* اسلایدر دوم با perView=1 */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          className="h-96 w-[25%] rounded-lg"
        >
          {[...Array(4)].map((_, i) => (
            <SwiperSlide
              key={i}
              className="bg-blue-400 text-white rounded-lg flex items-center justify-center text-xl h-96"
            >
              Content {i + 1}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Footer />
    </div>
  )
}
