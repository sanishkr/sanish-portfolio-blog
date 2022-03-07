import ProjectImage from './project-image'
import PostBody from './post-body'

export default function ProjecttPreview({
  name,
  url,
  image,
  description,
}) {
  return (
    <div>
      <div className="mb-5">
        <ProjectImage title={name} imageObject={image} url={url} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
          <a className="hover:underline" href={url} target='_blank'>{name}</a>
      </h3>
      <p className="text-lg leading-relaxed mb-4">
        <PostBody content={description} />
      </p>
    </div>
  )
}
