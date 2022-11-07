import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  color: blue;
  align-items: center;
  gap: 20px;
  margin-right: 35px;
`;

const Button = styled.button`
  &:hover {
    color: #33ffff;
  }
`;

export { Box, Button };
