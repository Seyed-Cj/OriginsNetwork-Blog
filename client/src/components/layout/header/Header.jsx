import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import LastBlogs from './LastBlogs'

export default function Header() {
  return (
    <header className='h-full bg-custom-gradient dark:bg-zinc-800 dark:bg-custom-gradient-off'>
      <Navbar />
      <Slider />
      <LastBlogs />
    </header>
  )
}
