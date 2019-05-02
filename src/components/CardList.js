import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../ItemTypes';
import CardContainer from '../containers/CardContainer';
import EditableLabel from '../components/EditableLabel';
import '../styles/CardList.scss';
import { ReactComponent as IconArchive } from '../static/icons/archive.svg';
import { ReactComponent as IconDelete } from '../static/icons/delete.svg';
import { ReactComponent as IconEdit } from '../static/icons/edit.svg';

const cardTarget = {
    drop(props) {
        return { id: props.id };
    },
};

class CardList extends React.Component  {
    constructor(props) {
        super(props);
        this.onClickEdit = this.onClickEdit.bind(this);
    }
    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        addNewCard: PropTypes.func,
        cards: PropTypes.array,
        filter: PropTypes.string,
        onTitleChanged: PropTypes.func,
        onTitleChanged1: PropTypes.func,

        connectDropTarget: PropTypes.func.isRequired,
        isOver: PropTypes.bool.isRequired,
        canDrop: PropTypes.bool.isRequired,
    };

    state = {isListTitleEditing: false}

    onClickEdit = () => {
        this.setState({isListTitleEditing: true })
    }

    render() {
        const {
            title,
            cards,
            filter,
            addNewCard,
            connectDropTarget,
            isOver,
            canDrop,
            onListTitleChanged,
            onClickDelete,
            onClickArchive,
            onClickUnArchive,
            archived
        } = this.props;

        const isActive = canDrop && isOver;

        let backgroundColor = '#E2E4E6';
        if (isActive) {
            backgroundColor = '#8ac17c';
        } else if (canDrop) {
            backgroundColor = '#f9dd4d';
        }

        return connectDropTarget(
            <div className="card-list" style={{backgroundColor}}>
                <div className="card-list__header">
                    <div className="card-list__title">
                        <EditableLabel text={title} onTextUpdated={onListTitleChanged} placeholder="New List" />
                    </div>
                    <div className="card-list__actions" style={{display: archived ? 'none' : 'block'}}>
                        {/*<button title="Edit" className="list-edit" onClick={this.onClickEdit}><IconEdit/></button>*/}
                        <button title="Archive" className="list-archive" onClick={onClickArchive}><IconArchive/></button>
                        <button title="Delete" className="list-delete" onClick={onClickDelete}><IconDelete/></button>
                    </div>
                    <div className="card-list__actions" style={{display: archived ? 'block' : 'none'}}>
                        <button title="Un Archive" className="list-un-archive" onClick={onClickUnArchive}>unarchive</button>
                    </div>
                </div>
                {
                    cards
                    .filter((c) => c.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1) // Filter the cards based on the filter string
                    .map((c, index) => <CardContainer key={index} id={c.id}/>) // Map to CardContainer
                }
                <a href="#" className="card-list__add-card" onClick={addNewCard}>+ Add a card</a>
            </div>
        );
    }
}

export default DropTarget(ItemTypes.CARD, cardTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))(CardList);
