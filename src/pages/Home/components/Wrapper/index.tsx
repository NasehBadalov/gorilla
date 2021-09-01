import React from 'react';

import './style.scss';

const Wrapper: React.FC = ({ children }): JSX.Element => (
  <div className="HomeWrapper">{children}</div>
);

export default Wrapper;
