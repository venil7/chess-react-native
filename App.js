import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { Menu, Main, About } from './src';
import styled from 'styled-components/native';

// import { Board } from 'chess-js';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const TopMenu = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const MenuItem = styled(Link) `
  align-items: center;
  margin-top: 40;
  padding: 10;
  border: 1;
  border-color: grey;
  border-radius: 10;
  background: ${(props) => props.pressed ? '#cd6a51' : 'papayawhip'};
  margin-left: 10;
  margin-right: 10;
`;

export default App = () => (
  <NativeRouter>
    <Container>

      <TopMenu>
        <MenuItem pressed to="/">
          <Text>Menu</Text>
        </MenuItem>
        <MenuItem to="/main">
          <Text>Game</Text>
        </MenuItem >
        <MenuItem to="/about">
          <Text>About</Text>
        </MenuItem>
      </TopMenu>

      <Route exact path="/" component={Menu} />
      <Route path="/main" component={Main} />
      <Route path="/about" component={About} />
    </Container>
  </NativeRouter>
);
