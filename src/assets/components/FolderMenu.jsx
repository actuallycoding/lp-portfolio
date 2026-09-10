import { useState } from 'react'

function FolderMenu({
  projects,
  selectedProject,
  activeSection,
  onSelectProject,
  onSelectSection,
}) {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  return (
    <nav className="folder-menu" aria-label="Project navigation">
      <button
        type="button"
        className={`menu-item ${activeSection === 'about' ? 'active' : ''}`}
        onClick={() => onSelectSection('about')}
      >
        ABOUT ME
      </button>

      <button
        type="button"
        className={`menu-item ${activeSection === 'contact' ? 'active' : ''}`}
        onClick={() => onSelectSection('contact')}
      >
        CONTACT
      </button>

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
                } ${
                  project.status?.toLowerCase() === 'archived'
                    ? 'archived'
                    : ''
                }`}
                onClick={() => onSelectProject(project)}
              >
                <span className="project-item-title">
                  {project.title}
                </span>

                <span className="project-item-meta">
                  <time className="project-item-date" dateTime={project.date}>
                    {project.date.replaceAll('-', '.')}
                  </time>
                  {project.status && (
                    <span className="project-item-status">
                      {project.status}
                    </span>
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default FolderMenu