import { useState, useEffect } from 'react';
import DarkModeToggle from '../../common/DarkMode';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-gray-900/90 backdrop-blur-sm' : 'py-4 bg-transparent'} navbar-gradient text-white px-4 md:px-24`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="logo" className="w-8 h-8 md:w-10 md:h-10 ml-2" />
            <h1 className='font-bold text-lg md:text-xl'>Origins Network</h1>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <li className="cursor-pointer hover:text-green-400 transition-colors">دوره ها</li>
            <li className="cursor-pointer hover:text-green-400 transition-colors">وبلاگ</li>
            <li className="cursor-pointer hover:text-green-400 transition-colors">رزومه</li>
            <li className="cursor-pointer hover:text-green-400 transition-colors">مدرس ها</li>
            <li className="cursor-pointer hover:text-green-400 transition-colors">درباره ما</li>
            <li className="cursor-pointer hover:text-green-400 transition-colors">تماس با ما</li>
          </ul>

          <div className="flex items-center gap-4">
            <div className="">
              <DarkModeToggle />
            </div>

            <button
              className="md:hidden text-white focus:outline-none transition-transform hover:scale-110"
              onClick={toggleMenu}
              aria-label="منو"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-70 bg-green-500 dark:bg-zinc-900 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="h-full flex flex-col p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
              <h1 className='font-bold text-white text-lg'>Origins Network</h1>
            </div>
          </div>

          <nav className="flex-1">
            <ul className="space-y-4">
              <li>
                <a href="#" className="block dark:text-white py-3 px-4 rounded-lg hover:bg-green-600 dark:hover:bg-zinc-800 hover:text-gray-800 dark:hover:text-green-400 transition-colors">دوره ها</a>
              </li>
              <li>
                <a href="#" className="block dark:text-white py-3 px-4 rounded-lg hover:bg-green-600 dark:hover:bg-zinc-800 hover:text-gray-800 dark:hover:text-green-400 transition-colors">وبلاگ</a>
              </li>
              <li>
                <a href="#" className="block dark:text-white py-3 px-4 rounded-lg hover:bg-green-600 dark:hover:bg-zinc-800 hover:text-gray-800 dark:hover:text-green-400 transition-colors">رزومه</a>
              </li>
              <li>
                <a href="#" className="block dark:text-white py-3 px-4 rounded-lg hover:bg-green-600 dark:hover:bg-zinc-800 hover:text-gray-800 dark:hover:text-green-400 transition-colors">مدرس ها</a>
              </li>
              <li>
                <a href="#" className="block dark:text-white py-3 px-4 rounded-lg hover:bg-green-600 dark:hover:bg-zinc-800 hover:text-gray-800 dark:hover:text-green-400 transition-colors">درباره ما</a>
              </li>
              <li>
                <a href="#" className="block dark:text-white py-3 px-4 rounded-lg hover:bg-green-600 dark:hover:bg-zinc-800 hover:text-gray-800 dark:hover:text-green-400 transition-colors">تماس با ما</a>
              </li>
            </ul>
          </nav>

          <div className="mt-auto pt-4 border-t border-gray-700">
            
          </div>
        </div>
      </div>
      
      <div className="pt-16 md:pt-24"></div>
    </>
  );
}