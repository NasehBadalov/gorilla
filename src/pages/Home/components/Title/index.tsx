import React from 'react';

import './style.scss';

interface IHome {
  text: string;
}

const Home: React.FC<IHome> = ({ text }): JSX.Element => {
  return (
    <div className="HomeTitle">
      <h1 className="HomeTitle__text">{text}</h1>
    </div>
  );
};

export default Home;
