function ProjectCard({ project }) {
  if (!project) {
    return (
      <article className="project-card project-card-empty">
        <p>Select a project from the folder menu.</p>
      </article>
    )
  }

  const hasMetadata = project.type || project.role || project.status
  const hasLinks = project.link || project.github

  return (
    <article className="project-card">
      <header
        className={`project-card-header ${
          project.image ? 'project-card-header-with-image' : ''
        }`}
      >
        {project.image && (
          <img
            className="project-card-image"
            src={project.image}
            alt={`${project.title} icon`}
          />
        )}

        <div>
          <p className="project-label">PROJECT LOG</p>
          <h2>{project.title}</h2>
          <time className="project-date" dateTime={project.date}>
            {project.date.replaceAll('-', '.')}
          </time>
        </div>
      </header>

      {hasMetadata && (
        <dl className="project-metadata">
          {project.type && (
            <div>
              <dt>Type</dt>
              <dd>{project.type}</dd>
            </div>
          )}

          {project.role && (
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
          )}

          {project.status && (
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          )}
        </dl>
      )}

      <section className="project-section">
        <h3>Overview</h3>
        <p className="project-summary">{project.summary}</p>
      </section>

      <section className="project-section">
        <h3>Project Notes</h3>
        {Array.isArray(project.description) ? (
          <ul className="project-highlights">
            {project.description.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : (
          <p className="project-description">{project.description}</p>
        )}
      </section>

      {project.highlights?.length > 0 && (
        <section className="project-section">
          <h3>Key Features</h3>

          <ul className="project-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>
      )}

      {project.technologies?.length > 0 && (
        <section className="project-section project-technologies">
          <h3>Technologies</h3>

          <ul>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>
      )}

      {project.updates?.length > 0 && (
        <section className="project-section project-updates">
          <h3>Update History</h3>
          <ol>
            {project.updates.map((update) => (
              <li key={`${update.date}-${update.title}`}>
                <time dateTime={update.date}>
                  {update.date.replaceAll('-', '.')}
                </time>
                <strong>{update.title}</strong>
                <p>{update.details}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {hasLinks && (
        <footer className="project-links">
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              View project ↗
            </a>
          )}

          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              Source code ↗
            </a>
          )}
        </footer>
      )}
    </article>
  )
}

export default ProjectCard
