import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className='h-screen bg-custom-gradient dark:bg-zinc-800 dark:bg-custom-gradient-off'>
      <Navbar />
    </header>
  )
}
