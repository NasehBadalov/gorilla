import React from 'react';

// For reuse of 'container' class of Bootstrap library
const Container: React.FC = ({ children }): JSX.Element => (
  <div className="container" data-testid="Container">
    {children}
  </div>
);

export default Container;
