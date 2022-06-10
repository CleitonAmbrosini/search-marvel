import React from 'react';
import { StyledHeader } from './styles';
import Logo from '../../../Assets/imgs/logo.png';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="" />
    </StyledHeader>
  );
};

export default Header;
