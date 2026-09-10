import profileImage from '../profile.png'

const sectionContent = {
  about: {
    label: 'ABOUT ME',
    title: 'Lynette',
    introduction:
      'I focus on building clear, reliable, and practical software.',
    details:
      'The projects in this portfolio are personal projects created to demonstrate my skills, technical interests, and development process.',
  },
  contact: {
    label: 'CONTACT',
    title: "Let's connect",
    introduction:
      'I am open to discussing suitable software development opportunities.',
    details:
      'You can reach me through the contact details below. LinkedIn is also available for professional background and experience.',
  },
}

function ProfileSection({ section }) {
  const content = sectionContent[section]

  return (
    <article className={`project-card profile-card ${section}-profile`}>
      <header className="project-card-header">
        <p className="project-label">{content.label}</p>
        <h2>{content.title}</h2>
      </header>

      {section === 'about' ? (
        <>
          <div className="profile-hero">
            <img className="profile-image" src={profileImage} alt="Lynette" />
            <div className="profile-hero-content">
              <p className="profile-role">Software Developer</p>
              <p className="project-summary">{content.introduction}</p>
              <ul className="profile-technologies" aria-label="Technologies">
                {['Java', 'Spring Boot', 'React', 'SQL', 'REST APIs'].map(
                  (technology) => (
                    <li key={technology}>{technology}</li>
                  )
                )}
              </ul>
            </div>
          </div>

          <section className="project-section">
            <h3>About my work</h3>
            <p className="project-description">{content.details}</p>
          </section>
        </>
      ) : (
        <>
          <section className="project-section">
            <h3>Overview</h3>
            <p className="project-summary">{content.introduction}</p>
          </section>

          <section className="project-section">
            <h3>Details</h3>
            <p className="project-description">{content.details}</p>
          </section>
        </>
      )}

      {section === 'contact' && (
        <section className="project-section contact-details">
          <h3>Reach me</h3>
          <div>
            <p>
              Email:{' '}
              <a href="mailto:lynettepuah@gmail.com">
                lynettepuah@gmail.com
              </a>
            </p>
            <p>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/lynette-puah/">
                linkedin.com/in/lynette-puah
              </a>
            </p>
            <p>Phone: +65 8186 1692</p>
          </div>
        </section>
      )}
    </article>
  )
}

export default ProfileSection
