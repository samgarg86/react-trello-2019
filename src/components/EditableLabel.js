import React from 'react';
import '../styles/EditableLabel.scss';

export default class EditableLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isEditing: !props.text || props.text.length <= 0}
        this.textInput = React.createRef();

        this.onKeyUp = this.onKeyUp.bind(this);
        this.onClickTitle = this.onClickTitle.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    componentDidMount() {
        if (this.state.isEditing) {
            this.textInput.current.select();
            this.textInput.current.focus();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isEditing && !prevState.isEditing) {
            this.textInput.current.select();
            this.textInput.current.focus();
        }
    }

    // Note: onBlur always fires after this, so it looks after saving state
    onKeyUp = e => {
        switch (e.keyCode) {
            case 13: // Enter
                // if (this.textInput.current.value) {
                //     this.props.onTextUpdated(this.textInput.current.value)
                // }
                this.setState({'isEditing': false});
                break;
            case 27: // ESC
                this.textInput.current.value = ''
                this.setState({'isEditing': false});
        }
    }

    // This event does the actual state update
    onBlur = () => {
        if (this.props.allowEmptySave || this.textInput.current.value) {
            this.props.onTextUpdated(this.textInput.current.value)
        }
        this.textInput.current.value = ''
        this.setState({'isEditing': false})
    }

    onClickTitle = e => {
        this.setState({'isEditing': true})
    }

    render() {
        const {
            text,
            labelClassName = 'editable-label__label',
            inputClassName = 'editable-label__input',
            placeholder = 'Click to Edit'
        } = this.props;

        return (
            <div className={this.state.isEditing ? 'editing' : ''}>
                <span className={labelClassName}
                      style={{display: this.state.isEditing ? 'none' : 'block'}}
                      onClick={this.onClickTitle}>{text}</span>
                <input
                    className={inputClassName}
                    type="text"
                    placeholder={text && text.length ? text : placeholder}
                    style={{display: this.state.isEditing ? 'block' : 'none'}}
                    onKeyUp={this.onKeyUp}
                    onBlur={this.onBlur}
                    ref={this.textInput}
                />
            </div>
        );
    }
}
