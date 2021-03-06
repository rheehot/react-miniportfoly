import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  margin: 40px 0 0 -10px;
  ul {
    a {
      display: inline-block;
      width: 85px;
      margin-bottom: 2px;
      padding: 10px 10px 10px 15px;
      background: ${props => props.theme.layout.mainColor};
      border: 1px solid #a5a5a5;
      border-radius: 10px;
      color: #fff;
      font-size: 0.9rem;
      text-align: center;
      &.selected {
        background: #fff;
        color: #333;
      }
    }
  }
`;

function MainMenu() {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected">
            홈
          </NavLink>
        </li>
        <li>
          <NavLink to="/diary" activeClassName="selected">
            다이어리
          </NavLink>
        </li>
        <li>
          <NavLink to="/workbox" activeClassName="selected">
            워크박스
          </NavLink>
        </li>
        <li>
          <NavLink to="/photo" activeClassName="selected">
            사진첩
          </NavLink>
        </li>
        <li>
          <NavLink to="/gbook" activeClassName="selected">
            방명록
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
}

export default MainMenu;
