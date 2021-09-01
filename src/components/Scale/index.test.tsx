import { render, screen } from '@testing-library/react';
import Scale from './index';

test('should render Scale component', () => {
  render(<Scale scale={[0, 10]} name="scale-name" onChange={() => {}} />);
  const scaleElement = screen.getByTestId('Scale');

  expect(scaleElement).toBeInTheDocument();
});
