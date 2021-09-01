import { render, screen } from '@testing-library/react';
import Checkbox from './index';

test('should render Checkbox component', () => {
  render(<Checkbox name={'name'} onChange={() => {}} isChecked={() => true} />);
  const checkboxElement = screen.getByTestId('Checkbox');

  expect(checkboxElement).toBeInTheDocument();
});
