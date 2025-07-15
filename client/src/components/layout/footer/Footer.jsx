import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-10 bg-green-300 dark:bg-zinc-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="md:w-1/4">
            <h3 className="text-xl font-bold mb-4 text-zinc-700 dark:text-white border-b border-gray-700 pb-2">ارتباط با ما</h3>
            <div className="space-y-3">
              <div className="flex items-start text-gray-500">
                <svg className="w-5 h-5 mt-1 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@originsstudio.ir</span>
              </div>
              <div className="flex items-start text-gray-500">
                <svg className="w-5 h-5 mt-1 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>۰۹۰۳۸۱۰۵۱۹۵</span>
              </div>
              <div className="flex items-start text-gray-500">
                <svg className="w-5 h-5 mt-1 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>۱۰ صبح تا ۲ بعدازظهر</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/4">
            <h3 className="text-xl font-bold mb-4 text-zinc-700 dark:text-white border-b border-gray-700 pb-2">لینک‌های سریع</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-700 dark:text-gray-500 dark:hover:text-white transition-colors">صفحه اصلی</a></li>
              <li><a href="#" className="text-zinc-700 dark:text-gray-500 dark:hover:text-white transition-colors">محصولات</a></li>
              <li><a href="#" className="text-zinc-700 dark:text-gray-500 dark:hover:text-white transition-colors">تماس با ما</a></li>
              <li><a href="#" className="text-zinc-700 dark:text-gray-500 dark:hover:text-white transition-colors">سوالات متداول</a></li>
            </ul>
          </div>

          <div className="md:w-1/4">
            <h3 className="text-xl font-bold mb-4 text-zinc-700 dark:text-white border-b border-gray-700 pb-2">نماد های اعتماد</h3>
            
          </div>
          <div className="md:w-1/4">
            <h3 className="text-xl font-bold mb-4 text-zinc-700 dark:text-white border-b border-gray-700 pb-2">درباره ما</h3>
            <p className="leading-relaxed text-gray-500 ">
              فروشگاه Origins Studio ارائه کننده بهترین بازی‌های اورجینال و گیفت کارت‌ها با قیمت مناسب و کیفیت تضمینی
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 rounded-full p-[2px]">
            <img src="/images/logo.png" alt="Origins Studio" className="h-8" />
          </div>
          <div className="text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Origins Studio. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}