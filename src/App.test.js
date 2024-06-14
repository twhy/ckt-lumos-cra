import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Lumos GitHub link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Lumos/i);
  expect(linkElement).toBeInTheDocument();
});
