import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../components/Header';
import * as actions from '../actions';
import CardListContainer from '../containers/CardListContainer';
import '../styles/BoardContainer.scss';

const BoardContainer = ({lists, addNewList, archived}) => {
    return (
        <div className="BoardContainer">
            <Header onAddNewList={addNewList}/>
            <div className="CardListsContainer">
                {lists
                    .filter(l => l.archived === archived)
                    .map((list, index) => <CardListContainer id={list.id} key={index}/>)}
            </div>
        </div>);
}


BoardContainer.propTypes = {
    lists: PropTypes.array,
    addNewList: PropTypes.func
};

const mapStateToProps = (state) => ({
    lists: state.lists
});

const mapDispatchToProps = (dispatch) => ({
    addNewList: () => dispatch(actions.addNewList())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardContainer);
