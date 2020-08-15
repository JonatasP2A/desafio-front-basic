import styled from 'styled-components';
import bgHeader from '../assets/images/bg-header.jpg';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
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
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  div.size {
    width: 846px;
    flex-direction: column;
    display: flex;
    align-items: center;
  }

  h1 {
    margin-top: 48px;
    color: #4a4a4a;
  }

  h3 {
    margin-top: 24px;
    font-size: 16px;
    font-weight: 400;
  }

  img {
    margin-top: 24px;
  }
`;
