import React from 'react';

import { Container } from './styles';

const HeaderGlobo: React.FC = () => {
  return (
    <Container>
      <a href="https://www.globo.com/" className="blue">
        globo.com
      </a>
      <a href="https://g1.globo.com/" className="red">
        g1
      </a>
      <a href="https://globoesporte.globo.com/" className="green">
        ge
      </a>
      <a href="https://gshow.globo.com/" className="orange">
        gshow
      </a>
      <a href="https://globoplay.globo.com/" className="blue">
        vídeos
      </a>
    </Container>
  );
};

export default HeaderGlobo;
