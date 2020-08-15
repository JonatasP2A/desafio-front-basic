import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #06aa48;
  padding: 15px 20px;

  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: 600;
    font-size: 14px;

    svg {
      margin-right: 8px;
    }

    img {
      margin-left: 24px;
      margin-right: 8px;
      padding-left: 24px;
      border-left: 1px solid #fff;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 36px;
    font-weight: bold;
  }
`;

export const Search = styled.div`
  background: #399001;
  border-radius: 10px;
  padding: 8px;
  color: #fff;

  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;

    &::placeholder {
      color: #fff;
    }
  }
  svg {
    margin-right: 8px;
  }
`;
