import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { NativeRouter, Route } from "react-router-native";
import createHistory from "history/createMemoryHistory";
import { ConnectedRouter } from "react-router-redux";
import { Menu, Main, About, TopMenu, MenuItem } from "./components";
import { MENU, MAIN, ABOUT } from "./flux/actions";
import { newStore } from "./flux/store";

const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lavender;
`;

const items = [
  { path: "/", label: "Menu", value: MENU },
  { path: "/main", label: "Main", value: MAIN },
  { path: "/about", label: "About", value: ABOUT }
];

const history = createHistory();
const store = newStore(history);

export default (App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Container>

        <TopMenu items={items} />

        <Route exact path="/" component={Menu} />
        <Route path="/main" component={Main} />
        <Route path="/about" component={About} />

      </Container>
    </ConnectedRouter>
  </Provider>
));
