import React from 'react';

import './style.scss';

interface IQuestionBlock {
  question: string;
}

const QuestionBlock: React.FC<IQuestionBlock> = ({
  question,
  children,
}): JSX.Element => (
  <div className="QuestionBlock" data-testid="QuestionBlock">
    <h4 className="QuestionBlock__title">{question}</h4>
    <div className="QuestionBlock__answers">{children}</div>
  </div>
);

export default QuestionBlock;
