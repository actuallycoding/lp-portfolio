import { useState } from 'react'
import FolderMenu from './assets/components/FolderMenu'
import ProjectCard from './assets/components/ProjectCard'
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

  return (
    <>
      <header className="portfolio-header">
        <h1>LP PORTFOLIO</h1>
        <p className="subtitle">ROOT / LP_PORTFOLIO / LOGS</p>
        <hr className="divider" />
      </header>

      <main className="portfolio-content">
        <FolderMenu
          projects={sortedProjects}
          selectedProject={selectedProject}
          onSelectProject={setSelectedProject}
        />

        <div className="vertical-divider" />

        <section className="project-area">
          <ProjectCard project={selectedProject} />
        </section>
      </main>
      <ChatWidget />
    </>
  )
}

export default App