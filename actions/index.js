import {ADD_CARD, ADD_DECK, RECEIVE_DECKS} from "./types";

export const addDeck = (title) => (
   {type: ADD_DECK, title}
)

export const addCard = (id, card) => (
   {type: ADD_CARD, id, card}
)

export const receiveDecks = (decks) => (
    {type: RECEIVE_DECKS, decks}
)
