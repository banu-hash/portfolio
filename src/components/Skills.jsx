// src/components/Skills.jsx

const skills = [
  {
    number: "01",
    title: "Languages",
    items: ["Java", "C", "JavaScript"],
  },
  {
    number: "02",
    title: "Backend",
    items: ["Spring Boot", "Node.js", "Flask"],
  },
  {
    number: "03",
    title: "Frontend",
    items: ["React.js", "HTML", "CSS"],
  },
  {
    number: "04",
    title: "Database",
    items: ["MongoDB", "SQLite"],
  },
  {
    number: "05",
    title: "AI & Data",
    items: ["AI Applications", "CNN", "Emotion Recognition"],
  },
  {
    number: "06",
    title: "Other",
    items: ["UI/UX", "OOP", "Problem Solving"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-label">
        <span>02</span>
        MY TOOLKIT
      </div>

      <div className="skills-intro">
        <h2>
          Tools I use to
          <br />
          <em>bring ideas alive.</em>
        </h2>

        <p>
          A growing collection of technologies I use to design, develop and
          experiment with digital products.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.number}>
            <span className="skill-number">{skill.number}</span>

            <h3>{skill.title}</h3>

            <div className="skill-items">
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="card-arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;