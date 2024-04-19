import React from 'react'

const TechStack = ({ darkMode }) => {
  const cardStyle = darkMode
    ? 'bg-project-dark-card-bg text-project-dark-font-color'
    : 'bg-project-light-card-bg text-project-light-font-color'

  const techStack = {
    React:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'Node.js':
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg',
    'Next.js':
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    MongoDB:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg',
    MySQL:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    ESLint:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg',
    Netlify:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg',
    Vercel:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
    'Tailwind CSS':
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    'Material UI':
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg',
    JavaScript:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg',
    Swift:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
    Figma:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  }

  const iconStyle =
    'flex flex-col items-center justify-center gap-y-2 w-16 h-16'

  return (
    <div className={`mt-32 mx-32 rounded-3xl font-open-sans ${cardStyle}`}>
      <div className='mt-12 font-semibold text-4xl leading-relaxed'>
        My Techstack
      </div>
      <div className='grid grid-cols-8 gap-8 gap-y-16 px-16 mt-8 mb-16 font-open-sans'>
        {Object.entries(techStack).map(([name, imgSrc]) => (
          <div className={iconStyle} key={name}>
            <img src={imgSrc} alt={name} />
            <div className='whitespace-nowrap'>{name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
