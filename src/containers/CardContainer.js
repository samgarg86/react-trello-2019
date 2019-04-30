import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import Card from '../components/Card';
import {connect} from 'react-redux';

const CardContainer = ({card, onDroppedCard, onCardTitleChanged, onCardBeginEdit}) =>
    <Card {...card} onDropped={onDroppedCard} onTitleChanged={onCardTitleChanged}
                 onCardBeginEdit={onCardBeginEdit}/>;

CardContainer.propTypes = {
    card: PropTypes.object,
    onDroppedCard: PropTypes.func,
    onCardTitleChanged: PropTypes.func,
    onCardBeginEdit: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
    card: state.cards[ownProps.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDroppedCard: (cardId, listId) => dispatch(actions.moveCard(cardId, listId)),
    onCardTitleChanged: (newTitle) => dispatch(actions.changeCard(ownProps.id, newTitle))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardContainer);
