import React from "react";
import { Field, Coordinates } from "chess-js";
import { shallow } from "enzyme";
import { StyledCell, Cell, cellBackgroundColor } from "../src/components/chess/Cell";

const noop = () => {};

describe("<Cell />", () => {
  it("renders empty", () => {
    const coordinates = Coordinates.fromIndex(0);
    const field = new Field(coordinates, null);
    const wrapper = shallow(<Cell field={field} onPress={noop} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("<StyledCell />", () => {
  it("renders unselected, non possible move", () => {
    const selected = false, possibleMove = false;
    const wrapper = shallow(
      <StyledCell
        selected={selected}
        possibleMove={possibleMove}
        onPress={noop}
      >
        X
      </StyledCell>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders selected, non possible move", () => {
    const selected = true, possibleMove = false;
    const wrapper = shallow(
      <StyledCell
        selected={selected}
        possibleMove={possibleMove}
        onPress={noop}
      >
        X
      </StyledCell>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders unselected, possible move", () => {
    const selected = false, possibleMove = true;
    const wrapper = shallow(
      <StyledCell
        selected={selected}
        possibleMove={possibleMove}
        onPress={noop}
      >
        X
      </StyledCell>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders selected, possible move", () => {
    const selected = true, possibleMove = true;
    const wrapper = shallow(
      <StyledCell
        selected={selected}
        possibleMove={possibleMove}
        onPress={noop}
      >
        X
      </StyledCell>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe("cellBackgroundColor", () => {

  it("color when nothing is set", () => {
    const selected = false, possibleMove = false;
    const result = cellBackgroundColor({ selected, possibleMove });
    expect(result).toBe("ivory");
  });

  it("color when selected is set", () => {
    const selected = true, possibleMove = false;
    const result = cellBackgroundColor({ selected, possibleMove });
    expect(result).toBe("darkseagreen");
  });

  it("color when possibleMove is set", () => {
    const selected = false, possibleMove = true;
    const result = cellBackgroundColor({ selected, possibleMove });
    expect(result).toBe("palegreen");
  });

  it("color when both is set", () => {
    const selected = true, possibleMove = true;
    const result = cellBackgroundColor({ selected, possibleMove });
    expect(result).toBe("palegreen");
  });


});
