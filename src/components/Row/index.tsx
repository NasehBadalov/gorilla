import React from 'react';

// For reuse of 'row' class of Bootstrap library
const Row: React.FC = ({ children }): JSX.Element => (
  <div className="row" data-testid="Row">
    {children}
  </div>
);

export default Row;
