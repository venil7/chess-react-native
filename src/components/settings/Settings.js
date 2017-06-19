import React, { Component } from "react";
import { Text, View, Slider, Switch } from "react-native";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Content } from "../Content";
import { setAplhaBetta, setDifficulty } from "../../flux/actions/gameActions";

const enhance = connect(state => ({
  router: state.router,
  game: state.game
}));

const DifficultySlider = styled(Slider)`
  width: 150;
`;

const Row = styled.View`
  flex-direction: row;
`;

const SettingsText = styled.Text`
  font-weight: bold;
  font-size: 18;
`;

const difficultyText = diff => {
  switch (diff) {
    case 1:
      return "👶";
    case 2:
      return "😇";
    case 3:
      return "😎";
    case 4:
      return "👿";
  }
};

class Settings extends Component {
  onDifficultySlidingComplete(diffuculty) {
    const { dispatch } = this.props;
    dispatch(setDifficulty(diffuculty));
  }

  onUseAlphaBettaPruningToggle(alphaBetta) {
    const { dispatch } = this.props;
    dispatch(setAplhaBetta(alphaBetta));
  }

  render() {
    const { difficulty, alphaBetta } = this.props.game;
    const difficultyTxt = difficultyText(difficulty);
    return (
      <Content>
        <Row>
          <SettingsText>
            Difficulty:
          </SettingsText>
          <DifficultySlider
            step={1}
            minimumValue={1}
            maximumValue={4}
            value={difficulty}
            onSlidingComplete={diff => this.onDifficultySlidingComplete(diff)}
          />
          <SettingsText>
            {difficultyTxt}
          </SettingsText>
        </Row>
        <Row>
          <SettingsText>
            Alpha-betta pruning (experimental)
          </SettingsText>
          <Switch
            value={alphaBetta}
            onValueChange={val => this.onUseAlphaBettaPruningToggle(val)}
          />
        </Row>
      </Content>
    );
  }
}

const ConnectedSettings = enhance(Settings);
export { ConnectedSettings as Settings };
