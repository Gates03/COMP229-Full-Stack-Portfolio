/**
 * File Name: Home.jsx
 * Student's Name: Joshua Gates
 * StudentID: 301469968
 * Date: May 22, 2025
 */
import React from "react";
import { Link } from "react-router-dom";

// ===================== Home Component =====================
function Home() {
    return (
        // ===================== Home Page Structure =====================
        <div className="home-container" style={{ padding: '2rem', backgroundColor: '#f0f0f0' }}>
            <h1>Welcome to My Portfolio</h1>
            
            <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
                Hi, I'm Joshua — a passionate and detail-oriented software engineering graduate with a focus on building practical and user-friendly applications.
            </p>

            <p style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>
                <em>Mission Statement:</em><br />
                My mission is to use clean code, creative thinking, and solid fundamentals to solve real-world problems through technology — while continuously learning and growing as a developer.
            </p>

            <p style={{ marginTop: '1.5rem' }}>
                This website showcases who I am, what I do, and the work I’m proud of. Feel free to explore my <strong>projects</strong>, <strong>skills</strong>, and how to <strong>connect</strong> with me.
            </p>

            <Link to="/about">
                <button style={{ marginTop: '2rem', padding: '0.75rem 1.5rem', fontSize: '1rem', cursor: 'pointer' }}>
                    Learn More About Me
                </button>
            </Link>
        </div>
    );
}

export default Home;
