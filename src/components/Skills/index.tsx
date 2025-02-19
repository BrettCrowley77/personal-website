import React, { useState } from "react";
import "./styles.css";

import {
  FaUsers,
  FaHandsHelping,
  FaBookOpen,
  FaProjectDiagram,
  FaDatabase,
  FaGlobe,
  FaServer,
  FaCloud,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCube,
  FaTable,
} from "react-icons/fa";
import {
  SiPython,
  SiR,
  SiPostgresql,
  SiTableau,
  SiMapbox,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiGooglecloud,
  SiAmazon,
  SiPrisma,
  SiJest,
  SiSentry,
  SiWebpack,
  SiTypescript,
  SiGraphql,
  SiVite,
  SiExpo,
} from "react-icons/si";
import { MdDynamicFeed } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface Category {
  label: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const categories: Category[] = [
    {
      label: "Professional",
      skills: [
        { name: "Project Management", icon: <FaProjectDiagram /> },
        { name: "Facilitation", icon: <FaHandsHelping /> },
        { name: "Knowledge Translation", icon: <FaBookOpen /> },
        { name: "Teamwork", icon: <FaUsers /> },
      ],
    },
    {
      label: "Data & Analysis",
      skills: [
        { name: "R", icon: <SiR /> },
        { name: "Python", icon: <SiPython /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "Stata", icon: <FaCube /> },
        { name: "ArcGIS", icon: <FaGlobe /> },
        { name: "Google Sheets", icon: <FaTable /> },
        { name: "Tableau", icon: <SiTableau /> },
        { name: "Mapbox", icon: <SiMapbox /> },
      ],
    },
    {
      label: "Survey & Mapping",
      skills: [
        { name: "Kobo Toolbox", icon: <MdDynamicFeed /> },
        { name: "ArcGIS", icon: <FaGlobe /> },
        { name: "Mapbox", icon: <SiMapbox /> },
      ],
    },
    {
      label: "Front-end Web & Mobile Development",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "React Native", icon: <SiReact /> },
        { name: "Expo", icon: <SiExpo /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
      ],
    },
    {
      label: "Back-end & API",
      skills: [
        { name: "REST", icon: <FaServer /> },
        { name: "GraphQL", icon: <SiGraphql /> },
        { name: "Node", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Flask", icon: <SiFlask /> },
      ],
    },
    {
      label: "Cloud Hosting & Computing",
      skills: [
        { name: "AWS", icon: <SiAmazon /> },
        { name: "Google Cloud Platform", icon: <SiGooglecloud /> },
        { name: "Serverless Framework", icon: <FaCloud /> },
      ],
    },
    {
      label: "Data Modeling & Databases",
      skills: [
        { name: "DBDiagram", icon: <FaProjectDiagram /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
    },
    {
      label: "Version Control",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
      ],
    },
    {
      label: "Packaging & Quality Assurance",
      skills: [
        { name: "Webpack", icon: <SiWebpack /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Jest", icon: <SiJest /> },
        { name: "Sentry", icon: <SiSentry /> },
      ],
    },
    {
      label: "Deployment & Automation",
      skills: [
        { name: "GitHub Actions", icon: <FaGithub /> },
        { name: "EAS", icon: <SiExpo /> },
      ],
    },
    {
      label: "UI/UX Design",
      skills: [
        { name: "Figma", icon: <FaFigma /> },
        { name: "Design Thinking", icon: <GiTeacher /> },
        { name: "JTBD Framework", icon: <FaBookOpen /> },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0].label);

  const currentSkills =
    categories.find((cat) => cat.label === selectedCategory)?.skills || [];

  return (
    <section className="skills-section">
      <h2>Skills and Tools</h2>

      <ul className="category-chips">
        {categories.map((category) => (
          <li
            key={category.label}
            className={`chip ${
              selectedCategory === category.label ? "selected" : ""
            }`}
            onClick={() => setSelectedCategory(category.label)}
          >
            {category.label}
          </li>
        ))}
      </ul>

      <ul className="skills-list">
        {currentSkills.map((skill) => (
          <li key={skill.name}>
            {skill.icon && <span className="skill-icon">{skill.icon}</span>}
            <span className="skill-label">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
