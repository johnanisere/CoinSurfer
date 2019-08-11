import * as React from "react";
import "react-native";
import ListCoin from "../list-coin";
// Note: test renderer must be required after react-native.
import * as renderer from "react-test-renderer";

const list = { map: jest.fn() };
const fetchCoin = jest.fn();

it("renders correctly", () => {
  const tree = renderer
    .create(<ListCoin list={list} fetching={false} fetchCoin={fetchCoin} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
