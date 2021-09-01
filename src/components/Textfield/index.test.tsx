import { render, screen } from '@testing-library/react';
import TextField from './index';

test('should render TextField component', () => {
  render(<TextField name="textfield-name" onChange={() => {}} />);
  const textFieldElement = screen.getByTestId('TextField');

  expect(textFieldElement).toBeInTheDocument();
});
