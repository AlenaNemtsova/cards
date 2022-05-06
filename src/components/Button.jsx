import React from "react";
import './button.css'

export default class Button extends React.Component {
    render() {
        let className = 'button';
        
        if (this.props.success) {
            className += '  button__success';
        }
        return (
            <button className={className}>
                Нажми меня
            </button>
        );
    }
}