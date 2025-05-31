import React from "react";
import "./styles.css";

type EducationItem = {
  degree: string;
  institution: string;
  years: string;
  gpa: string;
};

const educationData: EducationItem[] = [
  {
    degree: "Master of Arts in Economics (in progress)",
    institution: "Queen’s University",
    years: "2024-2025",
    gpa: "3.94 / 4.3 (91.6%)",
  },
  {
    degree: "Bachelor of Arts in Global Development Studies",
    institution: "Queen’s University",
    years: "2014-2019",
    gpa: "3.16 / 4.3 (73.5%)",
  },
  {
    degree: "Bachelor of Applied Science in Civil Engineering",
    institution: "Queen’s University",
    years: "2013-2018",
    gpa: "3.57 / 4.3 (83.0%)",
  },
];

const EducationSection: React.FC = () => {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <ul>
        {educationData.map((item, index) => (
          <li key={index}>
            <h3>{item.degree}</h3>
            <p>
              {item.institution}, {item.years}
            </p>
            <p>GPA: {item.gpa}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EducationSection;
