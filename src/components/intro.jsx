import React from 'react'

const Intro = ({ darkMode }) => {
  const headlinerStyle = 'font-semibold text-5xl'
  const contentStyle = 'font-medium text-xl'
  const buttonFontColor = darkMode
    ? 'text-intro-dark-button-font-color'
    : 'text-intro-light-button-font-color'

  return (
    <div className='pl-36'>
      <div className='text-intro-font-color'>
        <div className='flex flex-row'>
          <div className='font-open-sans flex flex-col items-start'>
            <div className={`${headlinerStyle} pb-4`}>Nice to meet you</div>
            <div className={`${headlinerStyle} pb-12`}>this is Ricky</div>

            <div className={`${contentStyle} text-left`}>
              I'm a Front-end Software Engineer focusing on both Web and <br />{' '}
              Mobile development. Please feel free to contact me of any <br />
              collaboration ideas or related positions!
            </div>

            <div className='pt-12'>
              <div className={`flex flex-row gap-x-12 ${contentStyle}`}>
                <button
                  className={`bg-intro-button-bg ${buttonFontColor} font-semibold rounded-md px-8 py-4`}
                >
                  Contact me
                </button>
                <a href='#' className='py-4'>
                  My projects
                </a>
                <div className='border-l border-gray-300 h-8 self-center'></div>
                <a href='#' className='py-4'>
                  Techstak
                </a>
              </div>
            </div>
          </div>

          {/* TODO: replace the placeholder below with animated image */}
          <div className='ml-20 w-96 h-160 border border-gray-500'></div>
        </div>
      </div>
    </div>
  )
}

export default Intro
