import { render, screen } from '@testing-library/react';
import AnswerBlock from './index';

test('should render AnswerBlock component', () => {
  render(<AnswerBlock />);
  const answerBlockElement = screen.getByTestId('AnswerBlock');

  expect(answerBlockElement).toBeInTheDocument();
});
