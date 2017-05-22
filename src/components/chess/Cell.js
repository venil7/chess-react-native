import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import styled from "styled-components/native";

const possibleMoveColor = "palegreen";
const selectedColor = "darkseagreen";
const regularLightColor = "ivory";
const regularDarkColor = "lightsteelblue"; //SkyBlue

export const cellBackgroundColor = ({ col, row, possibleMove, selected }) => {
  const even = i => i % 2 === 0;
  const regularColor = even(col)
    ? even(row) ? regularLightColor : regularDarkColor
    : even(row) ? regularDarkColor : regularLightColor;
  return possibleMove ? possibleMoveColor : selected ? selectedColor : regularColor;
};
export const StyledCell = styled.TouchableHighlight`
  width: 40;
  height: 40;
  border-color: grey;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: ${cellBackgroundColor}
`;

const SymbolText = styled.Text`
  font-size: 24;
`;

export class Cell extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    possibleMove: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    field: PropTypes.object.isRequired
  };

  onPress() {
    const { onPress, field } = this.props;
    onPress(field);
  }

  render() {
    const { field, selected, possibleMove } = this.props;
    const symbol = field.isEmpty ? "" : field.piece.toString();
    return (
      <StyledCell
        col={field.coordinates.col}
        row={field.coordinates.row}
        selected={selected}
        possibleMove={possibleMove}
        onPress={() => this.onPress()}
      >
        <SymbolText>{symbol}</SymbolText>
      </StyledCell>
    );
  }
}
