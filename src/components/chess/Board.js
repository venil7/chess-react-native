import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from 'styled-components/native';
import PropTypes from "prop-types";
import { Cell } from "./Cell";

const StyledBoard = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 336;
  border: 1;
  border-color: white;
  justify-content: space-around;
`;

export class Board extends Component {
  static propTypes = {
    board: PropTypes.object.isRequired,
    onCellPress: PropTypes.func.isRequired,
    selectedField: PropTypes.object.isRequired,
    possibleMoves: PropTypes.array.isRequired,
  };

  render() {
    const { board, onCellPress, selectedField, possibleMoves } = this.props;
    const { fields } = board;
    const possibleFields = possibleMoves.map(({ to }) => to);

    return (
      <StyledBoard>
        {fields.map((field, index) => {
          const selected =
            !!selectedField &&
            selectedField.coordinates.index === field.coordinates.index;
          const possibleMove = possibleFields.some(
            f => f.index === field.coordinates.index
          );
          return (
            <Cell
              key={index}
              field={field}
              selected={selected}
              possibleMove={possibleMove}
              onPress={(field) => onCellPress(field)}
            />
          );
        })}
      </StyledBoard>
    );
  }
}
