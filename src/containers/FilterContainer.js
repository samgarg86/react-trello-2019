import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import Filter from '../components/Filter';
import {connect} from 'react-redux';

const FilterContainer = ({onFilterChange, filter}) => <Filter onFilterChange={onFilterChange} filter={filter}/>;

FilterContainer.propTypes = {
    onFilterChange: PropTypes.func,
    filter: PropTypes.string
};

const mapStateToProps = (state) => ({
    filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
    onFilterChange: (filterText) => dispatch(actions.filterCards(filterText))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterContainer);
