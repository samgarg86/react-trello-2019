export const ADD_NEW_LIST = 'ADD_NEW_LIST';
export const addNewList = (title = '') => ({
    type: ADD_NEW_LIST,
    title
});

export const EDIT_LIST_TITLE = 'EDIT_LIST_TITLE';
export const editListTitle = (id) => ({
    type: EDIT_LIST_TITLE,
    id
});

export const SAVE_LIST_TITLE = 'SAVE_LIST_TITLE';
export const saveListTitle = (id, title) => ({
    type: SAVE_LIST_TITLE,
    id,
    title
});

export const DELETE_LIST = 'DELETE_LIST';
export const deleteList = (id) => ({
    type: DELETE_LIST,
    id
});

export const ARCHIVE_LIST = 'ARCHIVE_LIST';
export const archiveList = (id) => ({
    type: ARCHIVE_LIST,
    id
});

export const UN_ARCHIVE_LIST = 'UN_ARCHIVE_LIST';
export const unArchiveList = (id) => ({
    type: UN_ARCHIVE_LIST,
    id
});

export const ADD_NEW_CARD = 'ADD_NEW_CARD';
export const addNewCard = (listId, title = '') => ({
    type: ADD_NEW_CARD,
    listId,
    title
});

export const MOVE_CARD = 'MOVE_CARD';
export const moveCard = (cardId, newListId) => ({
    type: MOVE_CARD,
    cardId,
    newListId
});

export const CHANGE_CARD = 'CHANGE_CARD';
export const changeCard = (cardId, newTitle) => ({
    type: CHANGE_CARD,
    cardId,
    newTitle
});

export const DELETE_CARD = 'DELETE_CARD';
export const deleteCard = (cardId, newTitle) => ({
    type: DELETE_CARD,
    cardId,
    newTitle
});

export const FILTER_CARDS = 'FILTER_CARDS';
export const filterCards = (filter) => ({
    type: FILTER_CARDS,
    filter
});
