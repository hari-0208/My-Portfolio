import "../Styles/Education.css";

// CERTIFICATE
import Frontend from "../assets/Introduction to Front End Development.pdf";
import SQL from "../assets/SQL CERTIFICATION.pdf";
import Fullstack from "../assets/HARIHARAN S BOOTCAMP CERTIFICATE.pdf";

const Education = () => {
  // EDUCATION

  const educations = [
    {
      year: "2022 - 2025",
      course: "B.Sc Computer Science",
      college: "The Madurai Diraviyam Thayumanavar Hindu College",
      university: "Manonmaniam Sundharanar University",
      city: "Tirunelveli",
    },
  ];

  // CERTIFICATIONS

  const certification = [
    {
      id: 1,
      icon: "ri-layout-line",
      platform: "Simplilearn",
      title: "Introduction To Frondend Developement",
      description:
        "Fundamentals of frontend development, including HTML, CSS, JavaScript, React, responsive design and user-friendly web interfaces.",
      view: Frontend,
    },

    {
      id: 2,
      icon: "ri-database-2-line",
      platform: "Simplilearn",
      title: "Introduction To SQL",
      description:
        "Learned SQL, fundamentals, database concepts, queries, filtering, sorting, joins and data manipulations.",
      view: SQL,
    },

    {
      id: 3,
      icon: "ri-code-box-line",
      platform: "Novi Tech ",
      title: "Full Stack  Developement Bootcamp",
      description:
        "Learned frontend, backend, database and API fundamentals for fullstact web development.",
      view: Fullstack,
    },
  ];
  return (
    <section className="section" id="education">
      <div className="section-heading">
        <p>My Background</p>

        <h2>
          Education <span>&</span> Certifications
        </h2>
      </div>

      {/* EDUCATION */}

      <div className="education-card">
        <div className="education-icon">
          <i className="ri-graduation-cap-line"></i>
        </div>

        {educations.map((education, index) => (
          <div className="education-content" key={index}>
            <span className="education-year">{education.year}</span>

            <h3>{education.course}</h3>

            <h4>{education.college}</h4>

            <p>
              {education.university}, {education.city}
            </p>
          </div>
        ))}
      </div>

      {/* CERTIFICATIONS */}

      <div className="certifications">
        {certification.map((certificate) => (
          <div className="certification-card" key={certificate.id}>
            <div className="certification-content">
              <div className="certification-icon">
                <i className={certificate.icon}></i>
              </div>

              <span className="certification-platform">
                {certificate.platform}
              </span>

              <h3>{certificate.title}</h3>

              <p>{certificate.description}</p>

              <a
                href={certificate.view}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Certificate
                <i className="ri-external-link-line"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
