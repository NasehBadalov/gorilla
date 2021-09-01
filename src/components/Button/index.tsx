import React from 'react';

import './style.scss';

interface IButton {
  text: string;
  htmlType: 'button' | 'submit' | 'reset'; // available html types for button element
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({
  text,
  htmlType,
  disabled = false,
}): JSX.Element => (
  <button
    disabled={disabled}
    className="Button"
    type={htmlType}
    data-testid="Button"
  >
    {text}
  </button>
);

export default Button;
