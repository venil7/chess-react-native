import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { Menu, Main, About, TopMenu, MenuItem } from './src/components';
import styled from 'styled-components/native';

// import { Board } from 'chess-js';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
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
