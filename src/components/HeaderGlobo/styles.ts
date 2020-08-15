import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #f3f3f3;
  padding: 15px 12px;

  a {
    padding: 0 8px;
    border-right: 1px solid #999999;
    border: 50%;

    text-decoration: none;
    font-weight: 600;
  }

  a:last-child {
    border-right: 0px;
  }

  a.blue {
    color: #0878e7;
  }

  a.red {
    color: #a80000;
  }

  a.green {
    color: #06aa48;
  }

  a.orange {
    color: #ff7f00;
  }
`;
