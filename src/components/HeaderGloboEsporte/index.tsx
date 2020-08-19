import React from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import escudo from '../../assets/images/escudo-header.svg';

import { Container, Search } from './styles';

const HeaderGloboEsporte: React.FC = () => {
  return (
    <Container>
      <div className="menus">
        <FiMenu size={24} color="#fff" />
        <h5>MENU</h5>
        <img src={escudo} alt="icon escudo" />
        <h5>TIMES</h5>
        <div className="teams">
          <img
            src={require('../../assets/escudos/atletico-mg.svg')}
            alt="Atlético Mineiro"
          />
          <img
            src={require('../../assets/escudos/atletico-pr.svg')}
            alt="Atlético Paranaense"
          />
          <img src={require('../../assets/escudos/bahia.svg')} alt="Bahia" />
          <img
            src={require('../../assets/escudos/botafogo.svg')}
            alt="Botafogo"
          />
          <img
            src={require('../../assets/escudos/corinthians.svg')}
            alt="Corinthians"
          />
          <img
            src={require('../../assets/escudos/coritiba.svg')}
            alt="Coritiba"
          />
          <img
            src={require('../../assets/escudos/flamengo.svg')}
            alt="Flamengo"
          />
          <img
            src={require('../../assets/escudos/fluminense.svg')}
            alt="Fluminense"
          />
          <img src={require('../../assets/escudos/goias.svg')} alt="Goiás" />
          <img src={require('../../assets/escudos/gremio.svg')} alt="Grêmio" />
          <img
            src={require('../../assets/escudos/internacional.svg')}
            alt="Internacional"
          />
          <img
            src={require('../../assets/escudos/palmeiras.svg')}
            alt="Palmeiras"
          />
          <img src={require('../../assets/escudos/santos.svg')} alt="Santos" />
          <img
            src={require('../../assets/escudos/sao-paulo.svg')}
            alt="São Paulo"
          />
          <img src={require('../../assets/escudos/sport.svg')} alt="Sport" />
          <img src={require('../../assets/escudos/vasco.svg')} alt="Vasco" />
        </div>
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
