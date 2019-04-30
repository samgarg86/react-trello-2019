// import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as actions from '../actions/index';


const lists = (state = [], action) => {
    let newState = [...state];
    switch (action.type) {
        case actions.ADD_NEW_LIST:
            return [...state, {id: state.length, title: action.title, archived: false}];
        case actions.DELETE_LIST:
            return newState.filter(list => list.id !== action.id);
        case actions.SAVE_LIST_TITLE:
            const listToChange = state[action.id];
            newState[action.id] = {...listToChange, title: action.title };
            return newState;
        case actions.ARCHIVE_LIST:
            const listToArchive = state[action.id];
            newState[action.id] = {...listToArchive, archived: true };
            return newState;
        case actions.UN_ARCHIVE_LIST:
            const listToUnArchive = state[action.id];
            newState[action.id] = {...listToUnArchive, archived: false };
            return newState;
        default:
            return state;
    }
};

const cards = (state = [], action) => {
    let newState = [...state];
    switch (action.type) {
        case actions.ADD_NEW_CARD:
            return [...state, {id: state.length, title: action.title, listId: action.listId}];
        case actions.MOVE_CARD:
            const cardToMove = state[action.cardId];
            newState[action.cardId] = {...cardToMove, listId: action.newListId};
            return newState;
        case actions.CHANGE_CARD:
            // Remove card from state if title is empty
            if (!action.newTitle || action.newTitle.length <= 0) {
                return newState.filter(card => card.id !== action.cardId);
            } else {
                const cardToChange = state[action.cardId];
                newState[action.cardId] = {...cardToChange, title: action.newTitle};
                return newState;
            }
        case actions.DELETE_CARD:
            return newState.filter(card => card.id !== action.cardId);
        default:
            return state;
    }
};

const filter = (state = '', action) => {
    switch (action.type) {
        case actions.FILTER_CARDS:
            return action.filter;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    lists,
    cards,
    filter,
    // routing
});

export default rootReducer;
