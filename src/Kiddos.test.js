import { render, screen } from '@testing-library/react';
import Kiddos from './components/Kiddos';

test('renders learn react link', () => {
  render(<Kiddos />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
