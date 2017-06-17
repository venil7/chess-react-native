import React, { Component } from "react";
import { Text, View, Slider } from "react-native";
import { Content } from "../Content";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { newGame } from "../../flux/actions/gameActions";
import styled from "styled-components/native";

const enhance = connect(state => ({ router: state.router, game: state.game }));

const DifficultySlider = styled(Slider)`
  border-color: red;
  border: 1;
  width: 150;
`;

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      difficulty: 1
    };
  }
  onValueChange(difficulty) {
    this.setState({ difficulty });
  }
  onSlidingComplete(diffuculty) {
    const { dispatch } = this.props;
    dispatch({ type: "set-difficulty" });
  }
  render() {
    return (
      <Content>
        <View>
          <Text>
            Difficulty Level: {this.state.difficulty}
          </Text>
          <DifficultySlider
            step={1}
            value={this.state.difficulty}
            minimumValue={1}
            maximumValue={4}
            onValueChange={d => this.onValueChange(d)}
            onSlidingComplete={d => this.onSlidingComplete(d)}
          />
        </View>
      </Content>
    );
  }
}

const ConnectedSettings = enhance(Settings);
export { ConnectedSettings as Settings };
