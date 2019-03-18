import React, { Component } from "react";
import { Dimensions } from "react-native";

import IgFeed from "./ui/screen/ig-feed/ig-feed.screen.js";

const width = Dimensions.get('window').width;

class App extends Component {
  render() {
    return (
      <IgFeed />
    );
  }
}

export default App;