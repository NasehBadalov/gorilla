import React from 'react';

import './style.scss';

interface ICheckbox {
  name: string;
  text?: string; // Optional text for component reuse
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: (value: string) => boolean; // Accepted function as a rule to control 'checked' state of the Checkbox component
}

const Checkbox: React.FC<ICheckbox> = ({
  name,
  text,
  isChecked,
  onChange,
}): JSX.Element => {
  return (
    <label className="Checkbox">
      <input
        type="checkbox"
        name={name}
        className="Checkbox__input"
        onChange={onChange}
        value={text}
        checked={isChecked(text)}
        data-testid="Checkbox"
      />
      <div className="Checkbox__overlay" />
      <span className="Checkbox__checkmark" />
      <span className="Checkbox__text">{text}</span>
    </label>
  );
};

export default Checkbox;
