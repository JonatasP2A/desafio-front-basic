import React from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import escudo from '../../assets/images/escudo-header.svg';

import { Container, Search } from './styles';

const HeaderGloboEsporte: React.FC = () => {
  return (
    <Container>
      <div>
        <FiMenu size={24} color="#fff" />
        <h5>MENU</h5>
        <img src={escudo} alt="icon escudo" />
        <h5>TIMES</h5>
      </div>
      <a href="https://globoesporte.globo.com/">ge</a>
      <Search>
        <FiSearch size={20} color="#fff" />
        <input placeholder="BUSCAR" />
      </Search>
    </Container>
  );
};

export default HeaderGloboEsporte;
