import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class Card extends Component {
  state = {
    showAnswer: false
  };

  flipCard = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };

  renderShowAnswer = () => {
      return (
          <View style={styles.container}>
              <Text style={styles.title}>Answer:</Text>
              <Text style={styles.text}>{this.props.card.answer}</Text>
              <TouchableOpacity
                  style={styles.btnContainer}
                  onPress={() => {
                      this.flipCard();
                      this.props.handleAnswer(true);
                  }}
              >
                  <Text style={styles.btnTitle}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.btnContainer}
                  onPress={() => {
                      this.flipCard();
                      this.props.handleAnswer(false);
                  }}
              >
                  <Text style={styles.btnTitle}>Incorrect</Text>
              </TouchableOpacity>
          </View>
      );
  }

  renderNotShowAnswer = () => {
      return (
          <View style={styles.container}>
              <Text style={styles.title}>Question:</Text>
              <Text style={styles.text}>{this.props.card.question}</Text>
              <TouchableOpacity style={styles.btnContainer} onPress={this.flipCard}>
                  <Text style={styles.btnTitle}>Show Answer</Text>
              </TouchableOpacity>
          </View>
      );
  }

  render() {
    if (this.state.showAnswer) {
      return this.renderShowAnswer();
    }
    return this.renderNotShowAnswer();
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
  text: {
    fontSize: 15,
    margin: 15
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
