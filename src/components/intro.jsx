import React from 'react'

const Intro = ({ darkMode }) => {
  const headlinerStyle = 'font-semibold text-5xl'
  const contentStyle = 'font-medium text-xl'
  const buttonFontColor = darkMode
    ? 'text-intro-dark-button-font-color'
    : 'text-intro-light-button-font-color'

  const introIconURL = darkMode
    ? '/assets/introicon-dark.png'
    : '/assets/introicon-light.png'

  return (
    <div className='mt-60 px-36'>
      <div className='text-intro-font-color'>
        <div className='flex flex-row justify-between'>
          <div className='ml-16 font-open-sans flex flex-col items-start'>
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

          <img
            src={introIconURL}
            alt='Intro Icon'
            className='w-96 h-96 rounded-3xl mr-16'
          />
        </div>
      </div>
    </div>
  )
}

export default Intro