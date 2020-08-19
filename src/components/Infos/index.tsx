import React from 'react';
import flamengo from '../../assets/escudos/flamengo.svg';
import saoPaulo from '../../assets/escudos/sao-paulo.svg';
import santos from '../../assets/escudos/santos.svg';

import { Container } from './styles';

const Infos: React.FC = () => {
  return (
    <Container>
      <div className="info">
        <img src={flamengo} alt="Escudo do Flamengo" />
        <h6>Flamengo</h6>
        <h1>101</h1>
        <h2>pontos</h2>
      </div>

      <div className="info">
        <img src={saoPaulo} alt="Escudo do São Paulo" />
        <h6>São Paulo</h6>
        <h1>204</h1>
        <h2>pontos</h2>
      </div>

      <div className="info">
        <img src={santos} alt="Escudo do Santos" />
        <h6>Santos</h6>
        <h1>301</h1>
        <h2>pontos</h2>
      </div>
    </Container>
  );
};

export default Infos;
