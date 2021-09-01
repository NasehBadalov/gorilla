import { render, screen } from '@testing-library/react';
import Row from './index';

test('should render Row component', () => {
  render(<Row />);
  const rowElement = screen.getByTestId('Row');

  expect(rowElement).toBeInTheDocument();
});
