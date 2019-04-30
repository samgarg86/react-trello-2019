import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from '../ItemTypes';
import '../styles/Card.scss';
import EditableLabel from '../components/EditableLabel';

class Card extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        onDropped: PropTypes.func,
        onTitleChanged: PropTypes.func,
        onCardBeginEdit: PropTypes.func,

        // Injected by React DnD:
        isDragging: PropTypes.bool.isRequired,
        connectDragSource: PropTypes.func.isRequired,
    };

    render() {
        const { title, connectDragSource, isDragging, onTitleChanged } = this.props;
        return connectDragSource(
            <div className="Card" style={{opacity: isDragging ? 0.5 : 1}}>
                <div className="Card-title">
                    {/**
                     * ....allowEmptySave={true}....
                     * The way it works is so if a user adds a card, action ADD_NEW_CARD will fire
                     * This basically adds an empty card to the list..
                     * But then if the user doesn't type anything and hits enter,
                     * we still need onTextUpdated to fire. This will fire the CHANGE_CARD action. The reducer will
                     * then see an empty title, and remove the card from list
                     * TODO: Maybe there is a better way to do this..
                     **/}
                    <EditableLabel text={title} onTextUpdated={onTitleChanged} allowEmptySave={true} />
                </div>
            </div>
        );
    }
}

const cardSource = {
    beginDrag(props) {
        return {
            id: props.id
        };
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }

        // When dropped on a compatible target, do something
        const draggedCard = monitor.getItem();
        const dropList = monitor.getDropResult();
        props.onDropped(draggedCard.id, dropList.id);
    }
};

/**
 * Specifies the props to inject into your component.
 */
const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
};

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
