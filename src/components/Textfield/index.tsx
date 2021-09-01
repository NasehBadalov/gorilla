import React from 'react';

import './style.scss';

interface ITextField {
  name: string;
  onChange: (answer) => void;
}

const TextField: React.FC<ITextField> = ({ name, onChange }): JSX.Element => (
  <textarea
    className="Textfield"
    data-testid="TextField"
    name={name}
    rows={3}
    cols={50}
    onChange={(event) => onChange(event.target.value)}
  />
);

export default TextField;
