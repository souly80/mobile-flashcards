import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  clearLocalNotification,
  setLocalNotification
} from "../utils/notifications";
import Card from "./Card";

class Quiz extends Component {
  state = {
    index: 0,
    score: 0,
    done: false
  };

  handleAnswer = correct => {
    const deckId = this.props.navigation.state.params.deckId;
    const questions = this.props.decks[deckId].questions;
    let { score, index, done } = this.state;

    score = correct ? score + 1 : score;
    index++;
    done = index === questions.length;
    this.setState({ index, score, done });

    if (done) {
      clearLocalNotification().then(setLocalNotification);
    }
  };

  restartQuiz = () => {
    this.setState({ index: 0, score: 0, done: false });
  };

  backToDeck = () => {
    this.props.navigation.goBack();
  };

  renderFlashCard = (questions) => {
      const { index, score } = this.state;

      return (
          <View style={styles.container}>
            <Text>
              Correct Answers: {score} out of {questions.length}
            </Text>
            <Text>Questions Remaining: {questions.length - index}</Text>
            <Card card={questions[index]} handleAnswer={this.handleAnswer} />
          </View>
      );
  }

  renderQuizDone = (questions) => {
      const { score } = this.state;
      return (
          <View style={styles.container}>
            <Text style={styles.title}>
              Result: {Math.floor(score / questions.length * 100)}% Correct
            </Text>
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={this.restartQuiz}
            >
              <Text style={styles.btnTitle}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={this.backToDeck}
            >
              <Text style={styles.btnTitle}>Back to Deck</Text>
            </TouchableOpacity>
          </View>
      );
  }


  render() {
    const deckId = this.props.navigation.state.params.deckId;
    const questions = this.props.decks[deckId].questions;
      const { done } = this.state;

      if (done) {
      return this.renderQuizDone(questions);
    }
    return this.renderFlashCard(questions);
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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

export default connect(state => state)(Quiz);
