import ProjectPreview from '../components/project-preview'
import { PORTFOLIO } from '../lib/constants'

export default function Projects({ projects }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {PORTFOLIO.PROJECTS.HEADER}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 lg:gap-32 gap-20 md:row-gap-32 mb-32">
        {projects.map((project) => (
          <ProjectPreview
            key={project._id}
            name={project.name}
            url={project.url}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </section>
  )
}
