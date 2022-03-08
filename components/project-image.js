import { imageBuilder } from '../lib/sanity'

export default function ProjectImage({ title, url, imageObject }) {
  const image = (
    <img
      width={1200}
      height={740}
      alt={`Cover Image for ${title}`}
      className='shadow-small hover:shadow-medium transition-shadow duration-200'
      src={imageBuilder(imageObject).width(1200).height(740).url()}
    />
  )

  return (
    <div className="-mx-5 sm:mx-0">
      <a aria-label={title} href={url} target='_blank'>{image}</a>
    </div>
  )
}
