import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 846px;
  justify-content: space-around;

  div.info {
    display: flex;
    flex-direction: column;
    align-items: center;

    h6 {
      font-size: 18px;
      font-weight: 400;
      margin-top: 8px;
    }

    h1 {
      font-weight: bold;
      font-size: 70px;
      color: #41a600;
      margin-top: 4px;
    }

    h2 {
      font-weight: 400;
      font-size: 28px;
      margin-top: 4px;
    }
  }
`;
