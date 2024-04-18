import React from 'react'

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

  return (
    <div className={`mt-56 mx-32 rounded-3xl font-open-sans ${cardStyle}`}>
      <div className='mt-12 font-semibold text-4xl leading-relaxed'>
        Projects and freelancing work <br /> I've accomplished so far
      </div>
      <div className='mt-12 mb-24 flex flex-row justify-center gap-x-12'>
        <div className={`${subcardStaticStyle} ${subcardActiveStyle}`}>
          <div className='p-16'>
            <img
              src='/assets/webicon.png'
              alt='Web Icon'
              width='200'
              height='200'
            />
            <div className='mt-8 font-semibold text-2xl'>Web</div>
          </div>
        </div>
        <div className={`${subcardStaticStyle} ${subcardActiveStyle}`}>
          <div className='p-16'>
            <img
              src='/assets/mobileicon.png'
              alt='Web Icon'
              width='200'
              height='200'
            />
            <div className='mt-8 font-semibold text-2xl'>Mobile</div>
          </div>
        </div>
        <div className={`${subcardStaticStyle} ${subcardActiveStyle}`}>
          <div className='p-16'>
            <img
              src='/assets/othericon.png'
              alt='Web Icon'
              width='200'
              height='200'
            />
            <div className='mt-8 font-semibold text-2xl'>Other</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
