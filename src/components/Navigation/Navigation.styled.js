import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  display: block;
  padding: 15px 0;
  text-decoration: none;
  font-size: 18px;
  /* color: blue; */
  color: #3333ff;
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