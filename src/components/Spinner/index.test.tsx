import { render, screen } from '@testing-library/react';
import Spinner from './index';

test('should render Spinner component', () => {
  render(<Spinner />);
  const spinnerElement = screen.getByTestId('Spinner');

  expect(spinnerElement).toBeInTheDocument();
});
