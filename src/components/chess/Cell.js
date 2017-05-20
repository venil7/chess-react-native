import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import styled from "styled-components/native";

const StyledCell = styled.TouchableHighlight`
  width: 40;
  height: 40;
  border: 1;
  border-color: grey;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  font-size: 16;
  background-color: ${({ selected, possibleMove }) => (possibleMove ? "palegreen" : selected ? "darkseagreen" : "ivory")};
`;

const SymbolText = styled.Text`
  font-size: 24;
`;

export class Cell extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    possibleMove: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    field: PropTypes.object.isRequired,
  };

  onPress() {
    const { onPress, field } = this.props;
    onPress(field);
  }

  render() {
    const { field, selected, possibleMove } = this.props;
    const symbol = field.isEmpty ? "" : field.piece.toString();
    return (
      <StyledCell selected possibleMove onPress={() => this.onPress()}>
        <SymbolText>{symbol}</SymbolText>
      </StyledCell>
    );
  }
}
