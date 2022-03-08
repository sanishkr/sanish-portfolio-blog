import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faInstagramSquare, faLinkedin, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { PORTFOLIO } from '../lib/constants'
import { imageBuilder } from '../lib/sanity'

export default function Portfolio({coverImage, fburl, giturl, igurl, lnurl, name, profileImage, title, twurl}) {
  const SM_LINKS = [
    {
      label: 'facebook',
      url: fburl,
      icon_value: faFacebookSquare,
    },
    {
      label: 'twitter',
      url: twurl,
      icon_value: faTwitterSquare,
    },
    {
      label: 'github',
      url: giturl,
      icon_value: faGithubSquare,
    },
    {
      label: 'linkedin',
      url: lnurl,
      icon_value: faLinkedin,
    },
    {
      label: 'instagram',
      url: igurl,
      icon_value: faInstagramSquare,
    },
  ]
  return (
    <header
      className='portfolio-header h-screen-85'
      style={{ backgroundImage: `url(${imageBuilder(coverImage).url()})`}}
    >
      <div className='overlay absolute top-0 bottom-0 right-0 left-0'></div>
      <div className='w-full mx-auto px-4'>
        <div className='flex flex-col h-screen-85 justify-start md:pt-32 pt-12 items-center'>
          <div className="relative p-1 mx-auto mb-8 img-border">
            <div
              className="profile-thumb"
              style={{ background: `url(${imageBuilder(profileImage).url()})` }}
            ></div>
          </div>
          <h1 className='text-4xl leading-5 text-white font-kaushan -rotate-6 m-0 p-0 mb-8 person-name font-light'>
            <span className='relative py-1 px-4'>{`${name}`}</span>
          </h1>
          <h3 className='text-white text-sm m-0 p-0 font-mono text-center leading-5 rotate-0'>
            <span>{title}</span>
          </h3>
          <p className="mt-4"></p>
          <ul className="m-0 p-0 list-none rotate-0">
            {
              PORTFOLIO.SHOW_SM_LINKS ? SM_LINKS.map(sm => <li key={sm.label} className='m-0 p-0 list-none inline-block'>
              <a
                className="text-white inline-block px-3"
                href={sm.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sm.label}
              >
                <FontAwesomeIcon icon={sm.icon_value} className='text-3xl' />
              </a>
            </li>)
            : null
            }
          </ul>
        </div>
      </div>
    </header>
  )
}
