'use client'

import React, { useState, useEffect } from 'react'

import Navbar from '../components/navbar'
import Intro from '../components/intro'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const mode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(mode)
  }, [])

  return (
    <div
      style={{
        backgroundColor: darkMode
          ? 'var(--dark-background)'
          : 'var(--light-background)',
      }}
      className='min-h-screen flex flex-col justify-center text-center'
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Intro darkMode={darkMode} />
    </div>
  )
}
