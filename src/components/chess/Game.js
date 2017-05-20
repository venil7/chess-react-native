import React, { Component } from "react";
import { Board } from "./Board";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../flux/actions/gameActions";

const enhance = connect(state => ({ game: state.game }));

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
    return (
      <View>
        <Board
          selectedField={selectedField}
          possibleMoves={possibleMoves}
          board={board}
          onCellPress={field => this.onCellPress(field)}
        />
        <Text>Move: {game.thinking ? "CPU" : "Human"}</Text>
      </View>
    );
  }
}

const ConnectedGame = enhance(Game);
export { ConnectedGame as Game };
