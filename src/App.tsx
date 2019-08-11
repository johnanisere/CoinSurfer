import React from "react";
import { createStackNavigator } from "react-navigation";
import { Root } from "native-base";

import Home from "./container/HomeContainer";

const App = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default () => (
  <Root>
    <App />
  </Root>
);
