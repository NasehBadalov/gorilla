import React, { useEffect, useState } from 'react';
import { EAnswerTypes } from 'enums';
import { v4 as uuidv4 } from 'uuid';
import AnswerBlock from 'components/AnswerBlock';
import TextField from 'components/Textfield';

interface ITextFieldAnswerBlock {
  position: number;
  onChange: (answer) => void;
}

const TextFieldAnswerBlock: React.FC<ITextFieldAnswerBlock> = ({
  position,
  onChange,
}): JSX.Element => {
  const uniqueId = uuidv4(); // unique name for every RadioAnswerBlock
  const [selectedAnswer, setSelectedAnswer] = useState<string>(''); // Typed text answer

  // Add empty answer to the state as soon as component mounts and update if the selectedAnswer changes
  useEffect(() => {
    onChange({
      type: EAnswerTypes.textfield,
      answer: selectedAnswer,
      position,
    });
  }, [selectedAnswer]);

  return (
    <AnswerBlock>
      <TextField
        name={uniqueId}
        onChange={(answer) => setSelectedAnswer(answer)}
      />
    </AnswerBlock>
  );
};

export default TextFieldAnswerBlock;
