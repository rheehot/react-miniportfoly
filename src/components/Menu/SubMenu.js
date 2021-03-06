import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setFormMode } from '../../module/formMode';

const ListDiv = styled.div`
  h2 {
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
    font-weight: bold;
    a {
      color: ${props => props.theme.layout.mainColor};
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    font-size: 0.9rem;
    li {
      padding: 5px;
    }
    ul {
      padding-left: 15px;
    }
    a {
      color: ${props => props.theme.layout.textColor};
      &.selected {
        font-weight: bold;
      }
    }
  }
`;

const SubMenu = ({ title, list }) => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { formMode: isForm } = useSelector(state => state);
  const handleMode = () => {
    if (isForm) {
      dispatch(setFormMode());
    }
  };

  return (
    <ListDiv>
      <h2>
        <NavLink
          exact
          to={match.url}
          activeClassName="selected"
          onClick={handleMode}
        >
          {title}
        </NavLink>
      </h2>
      <nav>
        <ul>
          {list.map(item => (
            <li key={item.id}>
              <NavLink
                to={match.url + item.url}
                activeClassName="selected"
                onClick={handleMode}
              >
                {item.title}
              </NavLink>
              {item.child && (
                <ul>
                  {item.child.map(child => (
                    <li key={child.id}>
                      <NavLink
                        to={match.url + item.url + child.url}
                        activeClassName="selected"
                        onClick={handleMode}
                      >
                        {child.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </ListDiv>
  );
};

export default SubMenu;
