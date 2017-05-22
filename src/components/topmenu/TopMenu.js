import React from 'react';
import styled from 'styled-components/native';
import { Link } from 'react-router-native';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { appActions } from '../../flux/actions';

const connected = connect(state => ({ router: state.router }));
const MenuView = styled.View`
  display: flex;
  flex-direction: row;
`;

const MenuItem = styled(Link)`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;

  height: 40;
  background: ${({ pressed }) => pressed ? 'lavender' : 'snow'};
`;

const MenuText = styled.Text`
  font-weight: ${({ pressed }) => pressed ? 'bold' : 'normal'};
`;

const TopMenu = (props) => (
  <MenuView>
    {props.items.map(item => (
      <MenuItem
        to={item.path}
        key={item.path}
        pressed={item.path === props.router.location.pathname}>
        <MenuText
          pressed={item.path === props.router.location.pathname}>
          {item.label}
        </MenuText>
      </MenuItem>
    ))}
  </MenuView>
);

const ConnectedTopMenu = connected(TopMenu);

export { ConnectedTopMenu as TopMenu }