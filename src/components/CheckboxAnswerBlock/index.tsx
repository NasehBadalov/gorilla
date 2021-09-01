import React, { useEffect, useState } from 'react';
import { EAnswerTypes } from 'enums';
import { v4 as uuidv4 } from 'uuid';
import AnswerBlock from 'components/AnswerBlock';
import Checkbox from 'components/Checkbox';

interface ICheckboxAnswerBlock {
  answers: string[];
  position: number;
  onChange: (answer) => void;
}

const CheckboxAnswerBlock: React.FC<ICheckboxAnswerBlock> = ({
  answers,
  position,
  onChange,
}): JSX.Element => {
  const uniqueId = uuidv4(); // unique name for every RadioAnswerBlock
  const [selectedAnswers, setSelectedAnswers] = useState([]); // Checked answers

  // Filter existing checkboxes from the state in order not to repeat the same data
  const handleSelectedAnswer = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const isAlreadySelected = selectedAnswers.includes(value);
    setSelectedAnswers((prevState) =>
      isAlreadySelected
        ? prevState.filter((p) => p !== value)
        : [...prevState, value]
    );
  };

  // Add empty answer to the state as soon as component mounts and update if the selectedAnswers changes
  useEffect(() => {
    onChange({
      type: EAnswerTypes.checkbox,
      answer: selectedAnswers,
      position,
    });
  }, [selectedAnswers]);

  // Function to control 'checked' state of the Checkbox component
  const isChecked = (value: string) => {
    return selectedAnswers.includes(value);
  };

  return (
    <AnswerBlock>
      {answers.map((answer, i) => (
        <div key={uniqueId + i} className="AnswerBlock__flex-item">
          <Checkbox
            name={uniqueId}
            text={answer}
            isChecked={isChecked}
            onChange={handleSelectedAnswer}
          />
        </div>
      ))}
    </AnswerBlock>
  );
};

export default CheckboxAnswerBlock;
