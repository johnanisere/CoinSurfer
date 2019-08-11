import * as React from "react";
import "react-native";
import Home from "../spinner";
// Note: test renderer must be required after react-native.
import * as renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
