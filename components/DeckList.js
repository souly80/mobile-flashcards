import React, { Component } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text
} from "react-native";
import { connect } from "react-redux";
import tolower from "lodash.tolower";
import { receiveDecks } from "../actions";
import { getDecks } from "../utils/api";

class DeckList extends Component {

   componentDidMount() {
    const { dispatch } = this.props;
    const data = getDecks().then(data => {
        dispatch(receiveDecks(JSON.parse(data)));
    });
  }

  handlePress = (title) => {
    const deckId = tolower(title);
    this.props.navigation.navigate("Deck", { deckId });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Decks</Text>
        <FlatList
          data={Object.values(this.props.decks)}
          renderItem={({ item: { questions, title } }) => {
            return (
              <TouchableOpacity
                style={styles.deckListItemContainer}
                onPress={() => this.handlePress(title)}
              >
                <Text style={styles.btnTitle}>{title}</Text>
                <Text style={styles.btnText}>
                  {questions.length} Cards in the Deck
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    fontSize: 30,
    color: "red"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  deckListItemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    borderRadius: 5,
    marginTop: 15,
    width: 340,
    height: 100
  },
  btnTitle: {
    fontSize: 25,
    color: "red"
  },
  btnText: {
    color: "red"
  }
});

export default connect(state => state)(DeckList);
