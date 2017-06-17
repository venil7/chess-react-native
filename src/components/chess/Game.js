import React, { Component } from "react";
import { Board } from "./Board";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components/native";
import * as actions from "../../flux/actions/gameActions";

const enhance = connect(state => ({ game: state.game }));

const BoldText = styled.Text`
  font-weight: bold;
`;
const LightText = styled.Text`
  font-weight: 100;
`;

class Game extends Component {
  createGame() {
    const { dispatch } = this.props;
    dispatch(actions.newGame());
  }

  onCellPress(field) {
    const { dispatch } = this.props;
    dispatch(actions.selectFieldThunk(field));
  }

  render() {
    const { game } = this.props;
    const { board, selectedField, possibleMoves } = game;
    const thinking = game.thinking ? "CPU" : "Human";
    return (
      <View>
        <Board
          selectedField={selectedField}
          possibleMoves={possibleMoves}
          board={board}
          onCellPress={field => this.onCellPress(field)}
        />
        <BoldText>
          Move: <LightText>{thinking}</LightText>
        </BoldText>
      </View>
    );
  }
}

const ConnectedGame = enhance(Game);
export { ConnectedGame as Game };
