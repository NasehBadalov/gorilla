import { render, screen } from '@testing-library/react';
import Container from './index';

test('should render Container component', () => {
  render(<Container />);
  const containerElement = screen.getByTestId('Container');

  expect(containerElement).toBeInTheDocument();
});
