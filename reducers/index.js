import tolower from "lodash.tolower";
import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from "../actions/types";

function deck(state = {decks: {}}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        decks: action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        decks: {
          ...state.decks,
          [tolower(action.title)]: {
            title: action.title,
            questions: []
          }
        }
      };
    case ADD_CARD:
      const { id, card } = action;
      return {
        ...state,
        decks: {
          ...state.decks,
          [id]: {
            ...state.decks[id],
            questions: [...state.decks[id].questions, card]
          }
        }
      };
    default:
      return state;
  }
}

export default deck;
