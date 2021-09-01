import React, { useEffect, useState } from 'react';
import { EAnswerTypes } from 'enums';
import { v4 as uuidv4 } from 'uuid';
import AnswerBlock from 'components/AnswerBlock';
import Radio from 'components/Radio';

interface IRadioAnswerBlock {
  answers: string[];
  position: number;
  onChange: (answer) => void;
}

const RadioAnswerBlock: React.FC<IRadioAnswerBlock> = ({
  answers,
  position,
  onChange,
}): JSX.Element => {
  const uniqueId = uuidv4(); // unique name for every RadioAnswerBlock
  const [selectedAnswer, setSelectedAnswer] = useState(''); // Checked answer
  const isChecked = (value: string) => selectedAnswer === value; // Function to control 'checked' state of the Radio component

  // Add empty answer to the state as soon as component mounts
  useEffect(() => {
    onChange({
      type: EAnswerTypes.radio,
      answer: selectedAnswer,
      position,
    });
  }, [selectedAnswer]);

  return (
    <AnswerBlock flex={true}>
      {answers.map((answer, i) => (
        <div key={uniqueId + i} className="AnswerBlock__flex-item">
          <Radio
            name={uniqueId}
            text={answer}
            onChange={({ target: { value } }) => {
              setSelectedAnswer(value);
            }}
            isChecked={isChecked}
          />
        </div>
      ))}
    </AnswerBlock>
  );
};

export default RadioAnswerBlock;
