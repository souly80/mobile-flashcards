import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React from "react";
import DeckList from "./DeckList";
import AddDeck from "./AddDeck";
import {TabNavigator} from "react-navigation";

const Tabs = TabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            title: "Deck List",
            tabBarLabel: "Deck List",
            tabBarIcon: () => <Ionicons name="ios-home" size={30} />
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            title: "New Deck",
            tabBarLabel: "New Deck",
            tabBarIcon: () => (
                <FontAwesome name="plus-square" size={30} />
            )
        }
    }
});

export default Tabs;