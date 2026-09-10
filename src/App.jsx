import { useState } from 'react'
import FolderMenu from './assets/components/FolderMenu'
import ProjectCard from './assets/components/ProjectCard'
import ProfileSection from './assets/components/ProfileSection'
import projects from './data/projects.json'
import ChatWidget from './assets/components/ChatWidget'
import './App.css'

const sortedProjects = [...projects].sort((a, b) =>
  b.date.localeCompare(a.date)
)

function App() {
  const [selectedProject, setSelectedProject] = useState(
    sortedProjects[0] ?? null
  )
  const [activeSection, setActiveSection] = useState('about')

  function selectProject(project) {
    setSelectedProject(project)
    setActiveSection('project')
  }

  return (
    <>
      <header className="portfolio-header">
        <h1>LP PORTFOLIO</h1>
        <p className="subtitle">
          PERSONAL PROJECTS / TECHNICAL NOTES / DEVELOPMENT LOGS
        </p>
        <hr className="divider" />
      </header>

      <main className="portfolio-content">
        <FolderMenu
          projects={sortedProjects}
          selectedProject={selectedProject}
          activeSection={activeSection}
          onSelectProject={selectProject}
          onSelectSection={setActiveSection}
        />

        <div className="vertical-divider" />

        <section className="project-area">
          {activeSection === 'project' ? (
            <ProjectCard project={selectedProject} />
          ) : (
            <ProfileSection section={activeSection} />
          )}
        </section>
      </main>
      <ChatWidget />
    </>
  )
}

export default App