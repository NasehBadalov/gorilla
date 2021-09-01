import React from 'react';

import './style.scss';

interface IRadio {
  name: string;
  text?: string; // Optional text for component reuse
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: (value: string) => boolean; // Accepted function as a rule to control 'checked' state of the Checkbox component
}

const Radio: React.FC<IRadio> = ({
  name,
  text,
  isChecked,
  onChange,
}): JSX.Element => (
  <label className="Radio" data-testid="Radio">
    <input
      type="radio"
      name={name}
      className="Radio__input"
      value={text}
      onChange={onChange}
      checked={isChecked(text)}
    />
    <div className="Radio__overlay" />
    <span className="Radio__checkmark" />
    <span className="Radio__text">{text}</span>
  </label>
);

export default Radio;
