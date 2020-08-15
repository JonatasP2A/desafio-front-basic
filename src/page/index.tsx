import React from 'react';
import HeaderGlobo from '../components/HeaderGlobo';
import HeaderGloboEsporte from '../components/HeaderGloboEsporte';
import Infos from '../components/Infos';

import imagePlayers from '../assets/images/image-players.jpg';

import { Container, Image, Content } from './styles';

const HomePage: React.FC = () => {
  return (
    <>
      <HeaderGlobo />
      <HeaderGloboEsporte />
      <Container>
        <Image>
          <h1>FRONT-END DEV-GE</h1>
          <h2>
            Página de teste para admissão de colaboradores para a equipe de
            Desenvolvimento
          </h2>
        </Image>
        <Content>
          <div className="size">
            <h1>Layout de conteúdo</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              laoreet efficitur magna, a malesuada ligula fermentum in. In purus
              felis, volutpat sit amet ex et, varius maximus orci. Praesent
              placerat porta lorem, et interdum eros consequat quis. Donec vel
              metus vitae nibh gravida sodales a eu metus. Phasellus tincidunt
              auctor feugiat. Nulla sodales ipsum sed orci pulvinar euismod.
              Integer ac nulla eu dolor sagittis vehicula sed id magna. Donec
              tempor dapibus molestie.
            </h3>

            <img src={imagePlayers} alt="jogadores de seleções mistas" />

            <h1>Números e dados</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              laoreet efficitur magna, a malesuada ligula fermentum in. In purus
              felis, volutpat sit amet ex et, varius maximus orci. Praesent
              placerat porta lorem, et interdum eros consequat quis. Donec vel
              metus vitae nibh gravida sodales a eu metus. Phasellus tincidunt
              auctor feugiat. Nulla sodales ipsum sed orci pulvinar euismod.
              Integer ac nulla eu dolor sagittis vehicula sed id magna. Donec
              tempor dapibus molestie.
            </h3>
            <Infos />

            <h1>Lista de jogadores</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              laoreet efficitur magna, a malesuada ligula fermentum in. In purus
              felis, volutpat sit amet ex et, varius maximus orci. Praesent
              placerat porta lorem, et interdum eros consequat quis. Donec vel
              metus vitae nibh gravida sodales a eu metus. Phasellus tincidunt
              auctor feugiat. Nulla sodales ipsum sed orci pulvinar euismod.
              Integer ac nulla eu dolor sagittis vehicula sed id magna. Donec
              tempor dapibus molestie.
            </h3>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default HomePage;
