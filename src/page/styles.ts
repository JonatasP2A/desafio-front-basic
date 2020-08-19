import styled from 'styled-components';
import bgHeader from '../assets/images/bg-header.jpg';

export const Container = styled.div`
  height: 100%;
  margin-bottom: 48px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.div`
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url(${bgHeader}) no-repeat center;
  background-size: cover;

  h1 {
    font-size: 62px;
    font-weight: bold;
    color: #fff;
  }

  h2 {
    font-size: 20px;
    color: #fff;
    font-weight: 400;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 846px;
  flex-direction: column;
  align-items: center;
`;

export const Table = styled.div`
  display: flex;
  width: 846px;
  align-items: center;

  padding: 8px 0;
  border-top: 1px solid #b2b2b2;
  border-bottom: 1px solid #b2b2b2;

  div.search {
    background: transparent;

    width: 280px;
    align-items: center;
    border-bottom: 1px solid #727272;

    input {
      flex: 1;
      background: transparent;
      border: 0;

      &::placeholder {
        color: #727272;
      }
    }

    svg {
      margin-right: 8px;
    }
  }

  div.nascimento {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 144px;

    button {
      background: transparent;
      border: 0;
      text-decoration: underline;
      color: #727272;

      svg {
        padding-top: 5px;
      }
    }
  }

  div.team {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 190px;
  }

  div.rightSide {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 79px;

    button {
      background: transparent;
      border: 0;
      text-decoration: underline;
      color: #727272;

      svg {
        padding-top: 5px;
      }
    }
  }
`;

export const Players = styled.div`
  display: flex;
  width: 846px;
  align-items: center;

  padding: 8px 0;
  border-bottom: 1px solid #e6e6e6;

  div.player {
    display: flex;
    align-items: center;
    width: 280px;
  }

  div.nascimento {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 144px;
  }

  img {
    margin-right: 16px;
  }

  div.team {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 190px;

    img {
      width: 30px;
      height: 30px;
      margin-right: 4px;
    }
  }

  div.rightSize {
    width: 79px;
  }
`;

export const TitleText = styled.text`
  font-weight: 700;
  font-size: 32px;
  color: #4a4a4a;
  margin-top: 48px;
`;

export const Text = styled.text`
  font-size: 16px;
  color: #696969;
  margin: 24px 0 48px;
`;

export const TableHeadText = styled.text`
  display: flex;
  font-size: 16px;
  color: #727272;
`;

export const TextName = styled.text`
  display: flex;
  font-weight: 600;
  font-size: 18px;
  color: #41a600;
`;

export const TextInfoPlayer = styled.text`
  display: flex;
  font-weight: 600;
  font-size: 18px;
  color: #696969;
`;

export const TextScorePlayer = styled.text`
  display: flex;
  width: 79px;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  color: #696969;
`;
