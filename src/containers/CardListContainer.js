import React from 'react';
import * as actions from '../actions';
import CardList from '../components/CardList';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    const cardList = state.lists[ownProps.id];
    return {
        id: ownProps.id,
        title: cardList.title,
        cards: state.cards.filter(card => card.listId === ownProps.id),
        filter: state.filter,
        archived: cardList.archived
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    addNewCard: () => dispatch(actions.addNewCard(ownProps.id)),
    onListTitleChanged: (newTitle) => dispatch(actions.saveListTitle(ownProps.id, newTitle)),
    onClickEdit: () => dispatch(actions.editListTitle(ownProps.id)),
    onClickDelete: () => dispatch(actions.deleteList(ownProps.id)),
    onClickArchive: () => dispatch(actions.archiveList(ownProps.id)),
    onClickUnArchive: () => dispatch(actions.unArchiveList(ownProps.id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList);
