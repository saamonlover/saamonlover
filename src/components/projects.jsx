import React from 'react'

const Projects = ({ darkMode }) => {
  const projectCategoryStaticStyle = 'border border-gray-500 rounded-3xl'
  const projectCategoryActiveStyle = ''

  return (
    <div className='mt-56 mx-32 bg-project-dark-card-bg rounded-3xl'>
      <div className='font-open-sans text-project-dark-font-color'>
        <div className='mt-12 font-semibold text-4xl leading-relaxed'>
          Projects and freelancing work <br /> I've accomplished so far
        </div>
        <div className='mt-12 mb-24 flex flex-row justify-center gap-x-12'>
          <div className={`${projectCategoryStaticStyle}`}>
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
          <div className={`${projectCategoryStaticStyle}`}>
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
          <div className={`${projectCategoryStaticStyle}`}>
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
    </div>
  )
}

export default Projects
