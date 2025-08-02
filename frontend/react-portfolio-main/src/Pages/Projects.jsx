/**
 * File Name: Projects.jsx
 * Student's Name: Joshua Gates
 * StudentID: 301469968
 * Date: May 22, 2025
 */

import React from "react";
import "./styles/projects.css";

// ===================== Project List Data =====================
const projectList = [
  {
    title: 'Mini Library System',
    image: '/assets/Mini-Library.png',
    description: 'A console-based C# application for borrowing and returning books.',
    role: 'Sole Developer',
    outcome: 'Successfully implemented member and book management with a user-friendly interface.'
  },
  {
    title: 'Restaurant Website',
    image: '/assets/Restaurant-logo.png',
    description: 'A restaurant website built with HTML and CSS, featuring a modern menu and responsive design.',
    role: 'Front-End Developer',
    outcome: 'Launched a visually appealing and fully responsive restaurant site using only HTML and CSS.'
  },
  {
    title: 'Aspect Ratio Tool',
    image: '/assets/Aspect-Ratio-logo.png',
    description: 'Interactive drag-and-drop tool built with JavaScript to visualize aspect ratios for movies.',
    role: 'Front-End Developer',
    outcome: 'Designed and deployed an interactive tool to help users visualize movie aspect ratios.'
  }
];

// ===================== Projects Component =====================
function Projects() {
  return (
    // ===================== Projects Page Structure =====================
    <div style={{ padding: '2rem', backgroundColor: '#f0f0f0' }}>
      <h1>My Projects</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '1rem' }}>
        {projectList.map((project, index) => (
          // ===================== Project Card =====================
          <div
            key={index}
            className="project-card"
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: 0,
              width: '300px',
              background: '#f9f9f9',
              overflow: 'hidden'
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'fill',
                display: 'block',
                margin: 0,
                padding: 0,
                border: 'none'
              }}
            />
            <div style={{ padding: '1rem' }}>
              <h3>{project.title}</h3>
              <p><strong>Role:</strong> {project.role}</p>
              <p>{project.description}</p>
              <p><strong>Outcome:</strong> {project.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;