import React from "react";
import { Text, BackAndroid } from "react-native";
import { Content } from "../Content";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { newGame } from "../../flux/actions/gameActions";
import styled from "styled-components/native";

const MenuContainer = styled.View`
  display: flex;
  flex-flow: column;
  border-color: lightsteelblue;
  align-items: center;
  justify-content: space-around;
`;

const MenuItem = styled.TouchableHighlight`
  flex-grow: 1
  justify-content: space-around;
`;

const MenuTextItem = props => {
  const { text, ...rest } = props;
  return (
    <MenuItem {...rest}>
      <Text>{text}</Text>
    </MenuItem>
  );
};

const enhance = connect(state => ({ router: state.router }));

const Menu = props => {
  const { dispatch } = props;
  const startNewGame = () => {
    dispatch(newGame());
    dispatch(push("/main"));
  };
  return (
    <Content>
      <MenuContainer>
        <MenuTextItem
          text="New Game"
          onPress={() => startNewGame()}
        />
        <MenuTextItem
          text="Resume Game"
          onPress={() => dispatch(push("/main"))}
        />
        <MenuTextItem
          text="Options"
          onPress={() => dispatch(push("/options"))}
        />
        <MenuTextItem text="Exit" onPress={() => BackAndroid.exitApp()} />
      </MenuContainer>
    </Content>
  );
};

const ConnectedMenu = enhance(Menu);
export { ConnectedMenu as Menu };
