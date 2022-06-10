/* disable-eslint */
import React from 'react';
import { StyledInput } from './styles';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IfirstChildProps {
  updateName: (arg: string) => void;  // eslint-disable-line
}

const InputStyled: React.FC<IfirstChildProps> = ({ updateName }) => {
  return (
    <StyledInput>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Busque por um nome"
          onChange={(e) => {
            updateName(e.target.value);
          }}
        />
        <div className="search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </StyledInput>
  );
};

export default InputStyled;
