import styled from 'styled-components';

const Header = styled.header`
  margin-bottom: 50px;
  background-color: #111111;
  /* box-shadow: 0px 7px 5px 0px rgba(69, 12, 69, 0.68); */
  box-shadow: 0px 7px 5px 0px rgba(5, 5, 5, 1);
  /* display: flex;
  justify-content: space-between; */
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
`;

export { Container, Header };
