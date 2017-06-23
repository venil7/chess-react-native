import React, { Component } from 'react';
import { Text, View, Slider, Switch } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Content } from '../Content';
import { setPruning, setDepth } from '../../flux/actions/gameActions';

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

const depthText = diff => {
  switch (diff) {
    case 1:
      return '👶';
    case 2:
      return '😇';
    case 3:
      return '😎';
    case 4:
      return '👿';
  }
};

class Settings extends Component {
  onDepthSlidingComplete(depth) {
    const { dispatch } = this.props;
    dispatch(setDepth(depth));
  }

  onPruningToggle(pruning) {
    const { dispatch } = this.props;
    dispatch(setPruning(pruning));
  }

  render() {
    const { options: { depth, pruning } } = this.props.game;
    const depthTxt = depthText(depth);
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
            value={depth}
            onSlidingComplete={diff => this.onDepthSlidingComplete(diff)}
          />
          <SettingsText>
            {depthTxt}
          </SettingsText>
        </Row>
        <Row>
          <SettingsText>
            Alpha-betta pruning (experimental)
          </SettingsText>
          <Switch value={pruning} onValueChange={val => this.onPruningToggle(val)} />
        </Row>
      </Content>
    );
  }
}

const ConnectedSettings = enhance(Settings);
export { ConnectedSettings as Settings };
