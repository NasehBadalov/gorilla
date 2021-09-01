import React, { useEffect, useState } from 'react';
import { EAnswerTypes } from 'enums';
import { v4 as uuidv4 } from 'uuid';
import AnswerBlock from 'components/AnswerBlock';
import Scale from 'components/Scale';

interface IScaleAnswerBlock {
  answers: number[];
  position: number;
  onChange: (answer) => void;
}

const ScaleAnswerBlock: React.FC<IScaleAnswerBlock> = ({
  answers,
  position,
  onChange,
}): JSX.Element => {
  const uniqueId = uuidv4(); // unique name for every RadioAnswerBlock
  const [selectedAnswer, setSelectedAnswer] = useState(0); // Selected answer

  // Add empty answer to the state as soon as component mounts and update if the selectedAnswer changes
  useEffect(() => {
    onChange({
      type: EAnswerTypes.scale,
      answer: selectedAnswer,
      position,
    });
  }, [selectedAnswer]);

  return (
    <AnswerBlock>
      <Scale
        name={uniqueId}
        scale={answers}
        onChange={(answer) => setSelectedAnswer(answer)}
      />
    </AnswerBlock>
  );
};

export default ScaleAnswerBlock;
