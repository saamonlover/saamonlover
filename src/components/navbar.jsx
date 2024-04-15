import React from 'react'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

const Navbar = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <nav
      className={
        darkMode
          ? 'bg-navbar-dark text-navbar-dark-font-color fixed top-0 w-full font-open-sans font-semibold'
          : 'bg-navbar-light text-navbar-light-font-color fixed top-0 w-full font-open-sans font-semibold'
      }
    >
      <div className='flex flex-row justify-between pl-4 py-4'>
        <div className='flex flex-row gap-x-8'>
          <a href='#'>Intro</a>
          <a href='#'>Projects</a>
          <a href='#'>Techstack</a>
        </div>
        <button onClick={toggleDarkMode} className='mr-8'>
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
