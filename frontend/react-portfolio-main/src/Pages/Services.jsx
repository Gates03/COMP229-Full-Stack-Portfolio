/**
 * File Name: Services.jsx
 * Student's Name: Joshua Gates
 * StudentID: 301469968
 * Date: May 22, 2025
 */
import React from 'react';
import './styles/services.css'; 

// ===================== Services Component =====================
function Services() {
  // ===================== Services List Data =====================
  const services = [
    {
      title: 'Web Development',
      image: '/assets/Web.png',
      description: 'I build responsive and dynamic websites using React, HTML, and CSS.'
    },
    {
      title: 'Database Design',
      image: '/assets/SQL.png',
      description: 'I design and manage relational databases using Oracle SQL and MySQL.'
    },
    {
      title: 'C# & .NET Programming',
      image: '/assets/C-Sharp.png',
      description: 'I develop desktop and console applications using C# and the .NET framework.'
    }
  ];

  // ===================== Render Services Page Structure =====================
  return (
    <div style={{ padding: '2rem' , backgroundColor: '#f0f0f0'}}>
      <h1>Services I Offer</h1>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', flexWrap: 'wrap' }}>
        {services.map((service, index) => (
          // ===================== Service Card =====================
          <div
            key={index}
            className="service-card"
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
              src={service.image}
              alt={service.title}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'fill', 
                display: 'block',
                margin: 0,
                padding: 0,
                border: 'none'}}
            />
            <div style={{ padding: '1rem' }}>
              <p><strong>Title:</strong> {service.title}</p>
              <p><strong>Description:</strong> {service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
