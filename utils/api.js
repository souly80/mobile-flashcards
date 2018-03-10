import { AsyncStorage } from "react-native";
import tolower from "lodash.tolower";
import {STORAGE_KEY} from "../actions/types";


export function getDecks() {

    return new Promise(function(resolve, reject) {
        AsyncStorage.getItem(STORAGE_KEY, (err, result) => {
            if (result !== null)
                return resolve(JSON.parse(result));
            return resolve({ decks: {} });
        });
    });
}

export function saveNewDeck(deckTitle) {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [tolower(deckTitle)]: {
        title: deckTitle,
        questions: []
      }
    })
  );
}

export function saveNewCard(id, card) {
  return AsyncStorage.getItem(STORAGE_KEY).then(result => {
    const data = JSON.parse(result);
    data[id].questions.push(card);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  });
}