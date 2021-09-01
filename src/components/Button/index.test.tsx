import { render, screen } from '@testing-library/react';
import Button from './index';

test('should render Button component', () => {
  render(<Button text={'DONE'} htmlType="button" />);
  const buttonElement = screen.getByTestId('Button');

  expect(buttonElement).toBeInTheDocument();
});
