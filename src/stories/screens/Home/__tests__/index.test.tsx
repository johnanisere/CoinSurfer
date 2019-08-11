import * as React from "react";
import "react-native";
import Home from "../index";
// Note: test renderer must be required after react-native.
import * as renderer from "react-test-renderer";

const navigation = { navigate: jest.fn() };
const list = { map: jest.fn() };
const fetchCoin = jest.fn();

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Home
        list={list}
        fetched={true}
        fetching={false}
        fetchCoin={fetchCoin}
        navigation={navigation}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
