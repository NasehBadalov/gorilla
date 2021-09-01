import { render, screen } from '@testing-library/react';
import QuestionBlock from './index';

test('should render QuestionBlock component', () => {
  render(<QuestionBlock question={'test question'} />);
  const questionBlockElement = screen.getByTestId('QuestionBlock');

  expect(questionBlockElement).toBeInTheDocument();
});
