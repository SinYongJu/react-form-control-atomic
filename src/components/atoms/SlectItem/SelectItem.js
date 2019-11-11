import React from 'react';
import PropTypes from 'prop-types';

const SlectItem = ({opt : {option, tabIndex},onClick})=>{
    return <li role='option' tabIndex={tabIndex} onClick={onClick} data-value={option}>{option}</li>
}

SlectItem.propTypes = {
    option : PropTypes.string,
    tabIndex : PropTypes.number
};

export default SlectItem;