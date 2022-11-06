import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  display: block;
  padding: 15px 0;
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
  margin-right: 35px;
`;

export { Link, List };
