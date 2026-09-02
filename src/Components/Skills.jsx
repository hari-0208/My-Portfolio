import "../Styles/Skills.css";

const Skills = () => {
  const skills = [
    {
      icon: "ri-html5-fill",
      name: "HTML5",
    },

    {
      icon: "ri-css3-fill",
      name: "CSS3",
    },

    {
      icon: "ri-javascript-fill",
      name: "JavaScript",
    },

    {
      icon: "ri-reactjs-line",
      name: "React.js",
    },

    {
      icon: "ri-git-branch-line",
      name: "Git & GitHub",
    },

    {
      icon: "ri-database-2-line",
      name: "MySQL",
    },

    {
      icon: "ri-global-line",
      name: "REST API",
    },
    {
      icon: "ri-smartphone-fill",
      name: "Responsive Design",
    },
  ];
  return (
    <section className="section skills" id="skills">
      <div className="section-heading">
        <p>My Technical Skills</p>

        <h2>
          Skills & <span>Technologies</span>
        </h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon ">
              <i className={skill.icon}></i>
            </div>

            <div className="skill-info">
              <h3>{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
