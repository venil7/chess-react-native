import React from 'react';
import styled from 'styled-components/native';
import { Link } from 'react-router-native';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { appActions } from '../../flux/actions';

const connected = connect(s => ({ app: s.app }));
const MenuView = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const MenuItem = styled(Link)`
  align-items: center;
  margin-top: 40;
  padding: 10;
  border: ${({ pressed }) => pressed ? 2 : 1};
  border-color: indianred;
  border-radius: 10;
  background: ${({ pressed }) => pressed ? 'lightsalmon' : 'papayawhip'};
  margin-left: 10;
  margin-right: 10;
`;

const TopMenu = (props) => (
  <MenuView>
    {props.items.map(item => (
      <MenuItem
        to={item.path}
        key={item.path}
        pressed={item.value === props.app.menu}>
        <Text>{item.label}</Text>
      </MenuItem>
    ))}
  </MenuView>
);

const ConnectedTopMenu = connected(TopMenu);

export { ConnectedTopMenu as TopMenu }