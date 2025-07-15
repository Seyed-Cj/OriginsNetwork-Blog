import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function LastBlogs() {
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

    <div className="container mx-auto px-4 py-8 font-vazir">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl text-white md:text-3xl font-bold">اخرین پست ها :</h2>
        <a href="#" className="text-gray-900 hover:text-white dark:text-green-500 dark:hover:text-green-600 font-medium flex items-center transition-all ease-in-out duration-300">
          مشاهده همه مقالات
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation
        dir="rtl"
        className="pb-10"
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full text-right">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xs lg:text-[14px] xl:text-xl font-bold mb-2 dark:text-white">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-1 dark:text-gray-400">{post.excerpt}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {post.comments} نظر
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  )
}
