import { useState } from 'react'

function FolderMenu({
  projects,
  selectedProject,
  onSelectProject
}) {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  return (
    <nav className="folder-menu" aria-label="Project navigation">
      <button
        type="button"
        className="folder-button"
        aria-expanded={isProjectsOpen}
        onClick={() => setIsProjectsOpen((current) => !current)}
      >
        <span>{isProjectsOpen ? '▾' : '▸'}</span>
        <span>PROJECTS</span>
      </button>

      {isProjectsOpen && (
        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.id}>
              <button
                type="button"
                className={`project-item ${
                  selectedProject?.id === project.id ? 'active' : ''
                }`}
                onClick={() => onSelectProject(project)}
              >
                <span className="project-item-title">
                  {project.title}
                </span>

                <time
                  className="project-item-date"
                  dateTime={project.date}
                >
                  {project.date.replaceAll('-', '.')}
                </time>
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default FolderMenu