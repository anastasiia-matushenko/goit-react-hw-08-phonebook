import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: blue;
  &.active {
    color: red;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

export { Link, List };
