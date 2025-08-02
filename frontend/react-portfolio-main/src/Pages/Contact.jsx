/**
 * File Name: Contact.jsx
 * Student's Name: Joshua Gates
 * StudentID: 301469968
 * Date: May 22, 2025
 */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ===================== Contact Component =====================
function Contact(){
    const navigate = useNavigate();

    // ===================== Form State Data =====================
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // ===================== Handle Input Change =====================
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    // ===================== Handle Form Submit =====================
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await fetch('http://localhost:3001/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: formData.firstName,
                    lastname: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Form submitted successfully! Redirecting to home page...");
                setFormData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    message: ""
                });
                navigate("/");
            } else {
                setError(data.message || 'Failed to submit form');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // ===================== Contact Page Structure =====================
    return(
        <div style={{ padding: '2rem', backgroundColor: '#f0f0f0' }}>
            <h1>Contact Me</h1>

            <div style={{ marginBottom: '2rem' }}>
                <p><strong>Email:</strong> josh.gates03@gmail.com</p>
                <p><strong>Phone:</strong> 647-632-2327</p>
                <p><strong>Location:</strong> King City, ON</p>
                <p>
                    <strong>{' '}
                    <a href="https://github.com/Gates03" target="_blank" rel="noopener noreferrer">
                        GitHub                    
                    </a>
                    </strong>
                </p>
            </div>

            {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

            <form onSubmit={handleSubmit} style={{maxWidth: "500px"}}>
                <div style={{ display: "flex", gap: '1rem' }}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        style={{ flex: 1, padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        style={{ flex: 1, padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>

                <div style={{ display: "flex", gap: '1rem' }}>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={{ flex: 1, marginTop: '1rem', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc'}}
                    />
                </div>

                <div style={{ display: "flex", gap: '1rem' }}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: '97%', marginTop: '1rem', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc'}}
                    />
                </div>

                <div style={{ display: "flex", gap: '1rem' }}>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ width: '97%', marginTop: '1rem', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc'}}
                        rows={4}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: '#333',
                        color: '#fff',
                        border: 'none',
                        cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}

export default Contact;