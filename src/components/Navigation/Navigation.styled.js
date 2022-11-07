import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  display: block;
  padding: 15px 0;
  text-decoration: none;
  font-size: 18px;
  color: #3333ff;
  border-bottom: 1px solid transparent;
  transition: all 0.5ms ease;

  &.active {
    color: #33ffff;
    border-bottom: 1px solid #33ffff;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

export { Link, List };
