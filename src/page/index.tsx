import React, { useCallback, useState } from 'react';
import HeaderGlobo from '../components/HeaderGlobo';
import HeaderGloboEsporte from '../components/HeaderGloboEsporte';
import Infos from '../components/Infos';
import { compareAsc } from 'date-fns';
import { FiSearch, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { players } from '../assets/data/data.json';

import imagePlayers from '../assets/images/image-players.jpg';
import avatar from '../assets/images/avatar.png';

import {
  Container,
  Image,
  Content,
  Table,
  Players,
  TitleText,
  Text,
  TableHeadText,
  TextName,
  TextInfoPlayer,
  TextScorePlayer,
} from './styles';

const HomePage: React.FC = () => {
  const [orderByBirth, setOrderByBirth] = useState(false);
  const [orderByPlays, setOrderByPlays] = useState(false);
  const [orderByScores, setOrderByScores] = useState(false);
  const [orderByAprov, setOrderByAprov] = useState(false);
  const [player, setPlayer] = useState(players);

  const handleSearch = useCallback(() => {}, []);

  const handleOrderByBirth = useCallback(() => {
    setOrderByBirth(true);
    setOrderByPlays(false);
    setOrderByScores(false);
    setOrderByAprov(false);

    const orderPlayers = player.sort((a, b) => {
      const splitedA = a.date.split('/');
      const splitedB = b.date.split('/');

      return (
        Number(`${splitedA[2]}${splitedA[1]}${splitedA[0]}`) -
        Number(`${splitedB[2]}${splitedB[1]}${splitedB[0]}`)
      );
    });
    setPlayer(orderPlayers);
  }, []);

  const handleOrderByPlays = useCallback(() => {
    setOrderByBirth(false);
    setOrderByPlays(true);
    setOrderByScores(false);
    setOrderByAprov(false);

    const orderPlayers = players.sort((a, b) => (a.games > b.games ? -1 : 1));
    setPlayer(orderPlayers);
  }, []);

  const handleOrderByScores = useCallback(() => {
    setOrderByBirth(false);
    setOrderByPlays(false);
    setOrderByScores(true);
    setOrderByAprov(false);

    const orderPlayers = players.sort((a, b) => (a.goals > b.goals ? -1 : 1));
    setPlayer(orderPlayers);
  }, []);

  const handleOrderByAprov = useCallback(() => {
    setOrderByBirth(false);
    setOrderByPlays(false);
    setOrderByScores(false);
    setOrderByAprov(true);

    const orderPlayers = players.sort((a, b) =>
      a.goals / a.games > b.goals / b.games ? -1 : 1,
    );
    setPlayer(orderPlayers);
  }, []);

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
          <TitleText>Layout de conteúdo</TitleText>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            laoreet efficitur magna, a malesuada ligula fermentum in. In purus
            felis, volutpat sit amet ex et, varius maximus orci. Praesent
            placerat porta lorem, et interdum eros consequat quis. Donec vel
            metus vitae nibh gravida sodales a eu metus. Phasellus tincidunt
            auctor feugiat. Nulla sodales ipsum sed orci pulvinar euismod.
            Integer ac nulla eu dolor sagittis vehicula sed id magna. Donec
            tempor dapibus molestie.
          </Text>

          <img src={imagePlayers} alt="jogadores de seleções mistas" />

          <TitleText>Números e dados</TitleText>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            laoreet efficitur magna, a malesuada ligula fermentum in. In purus
            felis, volutpat sit amet ex et, varius maximus orci. Praesent
            placerat porta lorem, et interdum eros consequat quis. Donec vel
            metus vitae nibh gravida sodales a eu metus. Phasellus tincidunt
            auctor feugiat. Nulla sodales ipsum sed orci pulvinar euismod.
            Integer ac nulla eu dolor sagittis vehicula sed id magna. Donec
            tempor dapibus molestie.
          </Text>

          <Infos />

          <TitleText>Lista de jogadores</TitleText>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            laoreet efficitur magna, a malesuada ligula fermentum in. In purus
            felis, volutpat sit amet ex et, varius maximus orci. Praesent
            placerat porta lorem, et interdum eros consequat quis. Donec vel
            metus vitae nibh gravida sodales a eu metus. Phasellus tincidunt
            auctor feugiat. Nulla sodales ipsum sed orci pulvinar euismod.
            Integer ac nulla eu dolor sagittis vehicula sed id magna. Donec
            tempor dapibus molestie.
          </Text>
        </Content>

        <Table>
          <div className="search">
            <FiSearch />
            <input placeholder="Buscar Atleta" onChange={handleSearch} />
          </div>
          <div className="nascimento">
            <button onClick={handleOrderByBirth}>
              nascimento
              {orderByBirth ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>
          <div className="team">
            <TableHeadText>time</TableHeadText>
          </div>
          <div className="rightSide">
            <button onClick={handleOrderByPlays}>
              jogos
              {orderByPlays ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>
          <div className="rightSide">
            <button onClick={handleOrderByScores}>
              gols
              {orderByScores ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>
          <div className="rightSide">
            <button onClick={handleOrderByAprov}>
              Aprov.
              {orderByAprov ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>
        </Table>

        {player.map(player => (
          <Players key={player.id}>
            <div className="player">
              <img src={avatar} alt="Avatar" />
              <TextName>{player.name}</TextName>
            </div>
            <div className="nascimento">
              <TextInfoPlayer>{player.date}</TextInfoPlayer>
            </div>
            <div className="team">
              <img
                src={require(`../assets/escudos/${player.team.image}`)}
                alt="Escudo do Flamengo"
              />
              <TextInfoPlayer>{player.team.sigla}</TextInfoPlayer>
            </div>

            <TextScorePlayer>{player.games}</TextScorePlayer>
            <TextScorePlayer>{player.goals}</TextScorePlayer>
            <TextScorePlayer>
              {Math.round((player.goals / player.games) * 100)}%
            </TextScorePlayer>
          </Players>
        ))}
      </Container>
    </>
  );
};

export default HomePage;
