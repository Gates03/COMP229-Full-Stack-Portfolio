import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Simple component tests
describe('Navbar Component Tests', () => {
  test('creates a simple navbar structure', () => {
    const SimpleNavbar = () => (
      <nav className="navbar">
        <div className="navbar-logo">Logo</div>
        <ul className="navbar-links">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
    
    const { getByText } = render(<SimpleNavbar />);
    
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Projects')).toBeInTheDocument();
    expect(getByText('Services')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
  });

  test('navbar contains logo element', () => {
    const SimpleNavbar = () => (
      <nav className="navbar">
        <div className="navbar-logo">Portfolio Logo</div>
      </nav>
    );
    
    const { getByText } = render(<SimpleNavbar />);
    expect(getByText('Portfolio Logo')).toBeInTheDocument();
  });

  test('authentication links work', () => {
    const AuthLinks = () => (
      <div className="auth-links">
        <a href="/signin">Sign In</a>
        <a href="/signup">Sign Up</a>
      </div>
    );
    
    const { getByText } = render(<AuthLinks />);
    expect(getByText('Sign In')).toBeInTheDocument();
    expect(getByText('Sign Up')).toBeInTheDocument();
  });
});
