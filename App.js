import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import { Menu, Main, About, TopMenu, MenuItem } from "./src/components";
import { MENU, MAIN, ABOUT } from "./src/flux/actions";
import { newStore } from "./src/flux/store";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const items = [
  { path: "/", label: "Menu", value: MENU },
  { path: "/main", label: "Main", value: MAIN },
  { path: "/about", label: "About", value: ABOUT }
];

const store = newStore();

export default (App = () => (
  <Provider store={store}>
    <NativeRouter>
      <Container>

        <TopMenu items={items} />

        <Route exact path="/" component={Menu} />
        <Route path="/main" component={Main} />
        <Route path="/about" component={About} />

      </Container>
    </NativeRouter>
  </Provider>
));
