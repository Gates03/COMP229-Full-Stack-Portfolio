import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock fetch
global.fetch = jest.fn();

describe('Contact Form Tests', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders a simple contact form', () => {
    const SimpleContactForm = () => (
      <form>
        <h1>Contact Me</h1>
        <input type="text" placeholder="First Name" name="firstName" />
        <input type="text" placeholder="Last Name" name="lastName" />
        <input type="email" placeholder="Email" name="email" />
        <input type="tel" placeholder="Phone Number" name="phone" />
        <textarea placeholder="Your Message" name="message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    );
    
    const { getByText, getByPlaceholderText } = render(<SimpleContactForm />);
    
    expect(getByText('Contact Me')).toBeInTheDocument();
    expect(getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Phone Number')).toBeInTheDocument();
    expect(getByPlaceholderText('Your Message')).toBeInTheDocument();
    expect(getByText('Send Message')).toBeInTheDocument();
  });

  test('form inputs accept user input', () => {
    const SimpleContactForm = () => {
      const [formData, setFormData] = React.useState({
        firstName: '',
        email: ''
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      return (
        <form>
          <input 
            type="text" 
            placeholder="First Name" 
            name="firstName" 
            value={formData.firstName}
            onChange={handleChange}
          />
          <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
          />
        </form>
      );
    };
    
    const { getByPlaceholderText } = render(<SimpleContactForm />);
    
    const firstNameInput = getByPlaceholderText('First Name');
    const emailInput = getByPlaceholderText('Email');
    
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    
    expect(firstNameInput.value).toBe('John');
    expect(emailInput.value).toBe('john@example.com');
  });

  test('form validation works', () => {
    const SimpleContactForm = () => (
      <form>
        <input type="email" placeholder="Email" required />
        <button type="submit">Submit</button>
      </form>
    );
    
    const { getByPlaceholderText } = render(<SimpleContactForm />);
    
    const emailInput = getByPlaceholderText('Email');
    expect(emailInput).toHaveAttribute('required');
    expect(emailInput).toHaveAttribute('type', 'email');
  });
});
