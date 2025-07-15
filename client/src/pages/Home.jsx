import BlogSlider from '../components/blog/BlogSlider'
import Footer from '../components/layout/footer/footer'
import Header from '../components/layout/header/Header'

export default function Home() {
  return (
    <div className='bg-gray-50 dark:bg-zinc-800'>
      <Header />

      <BlogSlider />

      <Footer />
    </div>
  )
}
