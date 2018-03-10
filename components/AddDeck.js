import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import tolower from "lodash.tolower";
import { addDeck } from "../actions";
import { saveNewDeck } from "../utils/api";

class AddDeck extends Component {
  state = {
    title: ""
  };

  addDeck = () => {
    const { title } = this.state;
    const deckId = tolower(title);
    this.setState({ title: "" });
    this.props.dispatch(addDeck(title));
    this.props.navigation.navigate("Deck", { deckId });
    saveNewDeck(title);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.title}>Add Deck</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={title => this.setState({ title })}
            value={this.state.title}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.addDeck}>
          <Text style={{ color: "red" }}>Create Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    fontSize: 30,
    color: 'red'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    height: 40,
    margin: 30,
    flexDirection: "row"
  },
  input: {
    borderBottomColor: "lightblue",
    borderBottomWidth: 1,
    flex: 1
  },
  button: {
    marginTop: 40,
    width: 340,
    alignItems: "center",
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 5
  }
});

export default connect()(AddDeck);
