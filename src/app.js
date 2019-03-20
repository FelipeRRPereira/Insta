import React, { Component } from "react";
import { Dimensions } from "react-native";

import IgFeed from "./ui/screen/ig-feed/ig-feed.screen.js";
import IgDirects from "./ui/screen/ig-directs/ig-directs.screen.js";
import IgLogin from "./ui/screen/ig-login/ig-login.screen.js";
import IgProfile from "./ui/screen/ig-profile/ig-profile.screen.js";
import IgMessage from "./ui/screen/ig-directs/ig-message.screen.js";

const width = Dimensions.get('window').width;

class App extends Component {
  render() {
    return (
      <IgMessage />
    );
  }
}

export default App;