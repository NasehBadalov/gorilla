import { render, screen } from '@testing-library/react';
import Radio from './index';

test('should render Radio component', () => {
  render(
    <Radio name={'radio-name'} onChange={() => {}} isChecked={() => true} />
  );
  const radioElement = screen.getByTestId('Radio');

  expect(radioElement).toBeInTheDocument();
});
