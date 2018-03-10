import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";

class Deck extends Component {
  addNewQuestion = title => {
    this.props.navigation.navigate("AddCard", {
      title,
      update: () => this.refreshOnGoBack()
    });
  };

  startQuiz = () => {
    this.props.navigation.navigate("Quiz", {
      deckId: this.props.navigation.state.params.deckId
    });
  };

  render() {
    const { decks, navigation } = this.props;
    const deck = decks[navigation.state.params.deckId];
    const cardNumber = deck.questions.length;
    const cardText = `are ${cardNumber} cards`;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text>There {cardText} in this deck.</Text>
          {cardNumber > 0 &&
          <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => this.startQuiz(deck.title)}
          >
            <Text style={styles.btnTitle}>Start Quiz</Text>
          </TouchableOpacity>
          }
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => this.addNewQuestion(deck.title)}
        >
          <Text style={styles.btnTitle}>Add Question</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 30
  },
  btnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    borderRadius: 5,
    marginTop: 15,
    width: 340,
    maxHeight: 40
  },
  btnTitle: {
    fontSize: 20,
    color: "red",
    marginTop: 10
  }
});

export default connect(state => state)(Deck);
