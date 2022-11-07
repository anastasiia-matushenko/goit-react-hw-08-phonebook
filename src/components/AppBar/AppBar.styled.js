import styled from 'styled-components';

const Header = styled.header`
  margin-bottom: 50px;
  background-color: #111111;
  box-shadow: inset 1px 0px 10px 0px #02030a, 0px 5px 5px 0px #030b3b;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
`;

export { Container, Header };
