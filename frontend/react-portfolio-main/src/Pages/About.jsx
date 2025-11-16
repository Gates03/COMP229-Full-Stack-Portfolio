/**
 * File Name: About.jsx
 * Student's Name: Joshua Gates
 * StudentID: 301469968
 * Date: May 22, 2025
 */
import React from "react";

// ===================== About Component =====================
function About() {
    return (
        // ===================== About Page Structure =====================
        <div className="about-container" style={{ padding: '2rem', backgroundColor: '#f0f0f0' }}>
            <h1> About Me</h1>
            <img
                src="/assets/photo-2.png"
                alt="Myself"
                style={{
                    width: '180px',
                    height: '240px', // 3:4 ratio
                    borderRadius: '12px', 
                    marginTop: '1rem',
                    objectFit: 'cover'
                }}
            />

            <p style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>
                Hello! My name is <strong>Joshua Gates</strong>, and I’m currently studying Software Engineering at Centennial College. 
                I have a strong interest in full-stack web development and a growing skill set that includes HTML, CSS, JavaScript, C#, SQL, and Python.
            </p>

            <p style={{ fontSize: '1.1rem' }}>
                I enjoy building functional, user-friendly applications. I'm continuously improving my skills 
                and looking for opportunities to apply what I’ve learned in both academic and professional environments.
            </p>

            <a
                href="/assets/Joshua_Gates_Resume_NOV2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block', marginTop: '1rem', color: 'blue' }}
            >
                View My Resume (PDF)
            </a>

        </div>
    );
}

export default About;

