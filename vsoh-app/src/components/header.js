import '../style/main_components.scss';
import logoColor from '../vendory/logo_goriz_color.svg';
import frameImage from '../vendory/Frame 9191.svg';
import React from 'react';

const header = () => {

  return (
      <header>
       <img className = "vsohlogo" src={logoColor} alt="" />
      <img classname = "citylogo"src={frameImage} alt="" />
      </header>
  );
};

export default header;
