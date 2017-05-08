import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { Menu, Game, About } from './src';
import styled from 'styled-components/native';

// import { Board } from 'chess-js';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const TopMenu = styled.View`
  flex-Direction: row;
  justify-content: space-around;
`;

const MenuItem = styled.Link`
  flex: 1,
  align-items: center;
  padding: 10;
  underlay-color: #f0f4f7;
`;

export default App = () => (
  <NativeRouter>
    <Container>

      <TopMenu>
        <MenuItem to="/">
          <Text>Menu</Text>
        </MenuItem>
        <MenuItem to="/game">
          <Text>Game</Text>
        </MenuItem >
        <MenuItem to="/about">
          <Text>About</Text>
        </MenuItem >
      </TopMenu >

      <Route exact path="/" component={Menu} />
      <Route path="/game" component={Game} />
      <Route path="/about" component={About} />
    </Container >
  </NativeRouter >
);
