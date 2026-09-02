import "../Styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Shopora",
      description:
        "A responsive React-based e-commerce web application with product browsing, search, categories, cart management, quantity controls and discount calculations.",
      technologies: ["React.js", "JavaScript", "CSS3", "HTML5", "JSON"],
      img: "/Images/Shopora e-commerce.png",
      github: "https://github.com/hari-0208/Shopora-E-Commerce-Project",
      live: "https://shopora-e-commerce-project.vercel.app",
      featured: true,
    },

    {
      number: "02",
      title: "React To-Do List",
      description:
        "A simple task management application built with React.js using state management and localStorage to add, update and manage daily tasks.",
      technologies: ["React.js", "JavaScript", "CSS3", "LocalStorage"],
      img: "/Images/To-Do-List.png",
      github: "https://github.com/hari-0208/TO-DO-LIST-PROJECT",
      live: "https://hari-0208.github.io/TO-DO-LIST-PROJECT/",
      featured: false,
    },

    {
      number: "03",
      title: "Currency Converter",
      description:
        "A responsive currency converter application that allows users to select currencies and convert values through a clean user interface.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      img: "/Images/Currency Convertor.png",
      github: "https://github.com/hari-0208/Currency-Convertor",
      live: "https://hari-0208.github.io/Currency-Convertor/",
      featured: false,
    },

    {
      number: "04",
      title: "Student Management System",
      description:
        "A CRUD-based student management project designed to add, edit, delete and display student information through a simple interface.",
      technologies: ["HTML", "CSS", "JavaScript", "CRUD"],
      img: "/Images/CRUD.png",
      github: "https://github.com/hari-0208/Student-Management-System",
      live: "https://hari-0208.github.io/Student-Management-System/",
      featured: false,
    },
  ];

  return (
    <section className="section projects" id="projects">
      <div className="section-heading">
        <p>What I've Built</p>

        <h2>
          Featured <span>Projects</span>
        </h2>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <article
            className={`project-card ${project.featured ? "Featured-Project" : ""}`}
            key={project.number}
          >
            <div className="project-img">
              <img src={project.img} alt={`${project.title} project`} />
            </div>

            <div className="project-top">
              <span className="project-number">{project.number}</span>

              <div className="project-link">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-line"></i>
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-external-link-line"></i>
                  </a>
                )}
              </div>
            </div>

            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="tech-list">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>

            {project.featured && (
              <span className="featured-label">Featured Project</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
