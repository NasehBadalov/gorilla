import React from 'react';

import './style.scss';

interface IAnswerBlock {
  flex?: boolean;
}

const AnswerBlock: React.FC<IAnswerBlock> = ({
  flex = false,
  children,
}): JSX.Element => {
  return (
    <div className="AnswerBlock" data-testid="AnswerBlock">
      {flex ? (
        <div className="AnswerBlock__flex">{children}</div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default AnswerBlock;
