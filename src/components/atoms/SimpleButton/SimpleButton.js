import React from 'react';
import PropTypes from 'prop-types';
import './SimpleButton.scss'

const SimpleButton = ({themeClass,text,onClick}) => {
    return (
        <button className={themeClass} onClick={onClick} >{text}</button>
    );
};

SimpleButton.propTypes = {
    themeClass : PropTypes.string,
    text : PropTypes.string,
    onClick : PropTypes.func,
};

export default SimpleButton;