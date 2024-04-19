import React, { useState } from 'react'

import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const Projects = ({ darkMode }) => {
  const cardStyle = darkMode
    ? 'bg-project-dark-card-bg text-project-dark-font-color'
    : 'bg-project-light-card-bg text-project-light-font-color'

  const subcardStaticStyle = darkMode
    ? 'border border-gray-500 rounded-3xl'
    : 'rounded-3xl bg-project-light-subcard-bg shadow-lg'
  let subcardActiveStyle = darkMode
    ? 'hover:bg-project-dark-subcard-bg-hover'
    : 'hover:bg-project-light-subcard-bg-hover'
  subcardActiveStyle += ' cursor-pointer transition duration-500 ease-in-out'

  let viewAllProjectsLinkStyle = `
    w-fit mx-auto px-4 py-2 rounded-lg
    font-semibold text-lg
    cursor-pointer transition duration-500 ease-in-out
    hover:bg-project-dark-link-hover-color hover:bg-opacity-20
    `.trim()

  darkMode
    ? (viewAllProjectsLinkStyle +=
        ' text-project-dark-view-all-button-font-color hover:text-project-dark-view-all-button-font-color')
    : (viewAllProjectsLinkStyle +=
        ' text-project-light-view-all-button-font-color hover:text-project-light-view-all-button-font-color')

  const [viewAll, setViewAll] = useState(false)
  const ProjectList = () => (
    <div className='mb-12 '>
      <div className='grid grid-cols-3 gap-4'>
        <div className='flex flex-row justify-center'>
          <PermIdentityIcon className='mr-2' />
          My Portfolio
        </div>
        <div className='flex flex-row justify-center'>
          <SmartToyIcon className='mr-2' />
          Cookie Clubhouse Bot
        </div>
      </div>
      <div
        className={`mt-20 ${viewAllProjectsLinkStyle}`}
        onClick={() => setViewAll(false)}
      >
        View all projects <KeyboardArrowUpIcon className='w-8 h-8' />
      </div>
    </div>
  )

  return (
    <div className={`mt-56 mx-32 rounded-3xl font-open-sans ${cardStyle}`}>
      <div className='mt-12 font-semibold text-4xl leading-relaxed'>
        Projects and freelancing work <br /> I've accomplished so far
      </div>

      <div className='mt-12 mb-16 flex flex-row justify-center gap-x-12'>
        <div className={`${subcardStaticStyle} ${subcardActiveStyle}`}>
          <div className='p-16'>
            <img
              src='/assets/webicon.png'
              alt='Web Icon'
              width='200'
              height='200'
            />
            <div className='mt-8 font-semibold text-2xl'>Web</div>
            <div className='flex flex-col mt-8 font-semibold'>
              <div className='flex flex-row justify-center'>
                <PermIdentityIcon className='mr-2' />
                My Portfolio
              </div>
            </div>
          </div>
        </div>
        <div className={`${subcardStaticStyle} ${subcardActiveStyle}`}>
          <div className='p-16'>
            <img
              src='/assets/mobileicon.png'
              alt='Mobile Icon'
              width='200'
              height='200'
            />
            <div className='mt-8 font-semibold text-2xl'>Mobile</div>
            <div className='flex flex-col mt-8 font-semibold'>
              <div className='flex flex-row justify-center'>n/a</div>
            </div>
          </div>
        </div>
        <div className={`${subcardStaticStyle} ${subcardActiveStyle}`}>
          <div className='p-16'>
            <img
              src='/assets/othericon.png'
              alt='Other Icon'
              width='200'
              height='200'
            />
            <div className='mt-8 font-semibold text-2xl'>Other</div>
            <div className='flex flex-col mt-8 font-semibold'>
              <div className='flex flex-row justify-center'>
                <SmartToyIcon className='mr-2' />
                Cookie Clubhouse Bot
              </div>
            </div>
          </div>
        </div>
      </div>

      {viewAll ? (
        <ProjectList />
      ) : (
        <div
          className={`mb-12 ${viewAllProjectsLinkStyle}`}
          onClick={() => setViewAll(true)}
        >
          View all projects <KeyboardArrowDownIcon className='w-8 h-8' />
        </div>
      )}
    </div>
  )
}

export default Projects
