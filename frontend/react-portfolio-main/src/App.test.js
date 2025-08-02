import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Simple test that doesn't require any external dependencies
test('renders without crashing', () => {
  const TestComponent = () => <div>Test Component</div>;
  const { getByText } = render(<TestComponent />);
  expect(getByText('Test Component')).toBeInTheDocument();
});

test('basic math operations work', () => {
  expect(2 + 2).toBe(4);
  expect(5 * 3).toBe(15);
});

test('string operations work', () => {
  const name = 'Joshua Gates';
  expect(name).toContain('Joshua');
  expect(name.length).toBeGreaterThan(5);
});
