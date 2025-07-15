import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faDiscord, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function FollowUs() {
  return (
    <section className='hidden md:block container mx-auto'>
      <div className='bg-gray-300 dark:bg-zinc-600 py-4 px-4 rounded-2xl'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative'>

          <div className='md:w-1/2 text-center md:text-right z-10'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
              اوریجینز نتورک را در شبکه‌های اجتماعی دنبال کنید
            </h2>
            <p className='text-gray-400 leading-relaxed'>
              علاوه بر سایت، شبکه‌های اجتماعی دنبال کن تا از جدیدترین و بروزترین اخبار، تحلیل‌ها و اتفاقات دنیای تکنولوژی جا نمونی!
            </p>

            <div className='flex gap-4 mt-6 text-zinc-500 text-2xl'>
              <a href="https://youtube.com/@mychannel" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://discord.gg/myserver" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a href="https://t.me/originsnetwork" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a href="https://instagram.com/myprofile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          <div className='md:w-1/2 mt-10 md:mt-0 relative'>
            <div className='relative w-full h-72 md:h-80'>
              <img src='/images/logo.png' alt='' className='absolute left-1/2 md:left-0 top-0 transform -translate-x-1/2 md:translate-x-0 md:-translate-y-8 w-[400px] max-w-none z-20' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
