import React from "react";
import { Provider } from "react-redux";
import { View } from "react-native";
import { setLocalNotification } from "./utils/notifications";
import MainNavigator from "./components/MainNavigator";
import store from "./store/index";


export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
