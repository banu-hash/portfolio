// src/components/Projects.jsx

const projects = [
  {
    number: "01",
    title: "Online Student Emotion Detection",
    category: "AI · COMPUTER VISION · FULL-STACK",
    description:
      "An AI-powered online learning platform that detects student emotions through facial expressions and provides an interactive environment for students and teachers.",
    technologies: ["Python", "CNN", "Flask", "SQLite", "AI"],
    role: "Team Member · AI & Emotion Detection",
    github: "https://github.com/banu-hash/final-project",
    live: "YOUR_LIVE_DEMO_LINK",
  },
  {
    number: "02",
    title: "EGS Campus Navigation",
    category: "WEB APPLICATION · CAMPUS TECH",
    description:
      "A digital campus navigation solution designed to help students and visitors easily find buildings, departments and important locations within the EGS campus.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    role: "Team Member · Development",
    github: "https://github.com/banu-hash/nav",
    live: "YOUR_LIVE_DEMO_LINK",
  },
  {
    number: "03",
    title: "Adapto",
    category: "ANDROID · OFFLINE · SMS-BASED APPLICATION",
    description:
      "An offline Android application that uses SMS-based communication to provide its core functionality without requiring an internet connection.",
    technologies: ["Java", "Android", "SQLite", "SMS"],
    role: "Team Member · Android Application Development",
    github: "YOUR_GITHUB_LINK",
    live: null,
  },
  {
  number: "04",

  title: "Bathma Pithalai Ulagam",

  category: "BUSINESS WEBSITE · DEPLOYMENT · SEO",

  description:
    "A responsive business website developed for Bathma Pithalai Ulagam, a silver wholesaler in Nagapattinam. This project also gave me hands-on experience with website deployment, sitemap configuration and Google Search Console.",

  technologies: ["HTML", "CSS", "JavaScript"],

  role: "Developer · Frontend & Deployment",

  github: "https://github.com/banu-hash/silver-shop",

  google: "Bathma Pithalai Ulagam | Silver Wholesalers | Nagapattinam",

  live: "https://banu-hash.github.io/silver-shop/",
},
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-label">
        <span>03</span>
        SELECTED WORK
      </div>

      <div className="projects-heading">
        <h2>
          Things I’ve
          <br />
          <em>built.</em>
        </h2>

        <p>
          A selection of projects where technology, problem solving and
          creativity come together.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-number">
              {project.number}
            </div>

            <div className="project-main">
              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <p className="project-role">
                {project.role}
              </p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>

            <div className="project-open">
              ↗
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;