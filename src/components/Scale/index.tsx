import React from 'react';

import './style.scss';

interface IScale {
  scale: number[]; // Accept array as a range. Example: [0,10]
  name: string;
  onChange: (answer) => void;
}

const Scale: React.FC<IScale> = ({ name, scale, onChange }): JSX.Element => {
  // Function to render dynamic scale blocks
  const renderScaleBlocks = () => {
    const blocks = [];
    // Using for loop in order to create Scale blocks according to a given range
    for (let i = scale[0]; i <= scale[1]; i++) {
      blocks.push(
        <label
          key={i}
          className="Scale__number-block"
          onClick={() => {
            onChange(i);
          }}
        >
          <input
            type="radio"
            name={name}
            className="Scale__number-block-input"
          />
          <span className="Scale__number-block-content">{i}</span>
        </label>
      );
    }
    return blocks;
  };
  return (
    <div className="Scale" data-testid="Scale">
      <div className="Scale__text">
        <span className="Score__text-left">NOT AT ALL LIKELY</span>
        <span className="Score__text-right">EXTREMELY LIKELY</span>
      </div>
      <div className="Scale__wrapper">{renderScaleBlocks()}</div>
    </div>
  );
};

export default Scale;
