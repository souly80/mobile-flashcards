import {StackNavigator} from "react-navigation";
import Tabs from "./Tabs";
import DeckList from "./DeckList";
import Deck from "./Deck";
import AddCard from "./AddCard";
import Quiz from "./Quiz";

const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs
    },
    DeckList: {
        screen: DeckList
    },
    Deck: {
        screen: Deck,
        navigationOptions: {
            title: "Deck"
        }
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            title: "Add Question"
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: "Quiz"
        }
    }
});

export default MainNavigator;