import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss'
const Input = (props) => {
    const { id, name, placeholer, value, onChange} = props
    console.log(value)
    
    return (
        <input id={id} name={name} value={value} placeholer={placeholer} onChange={onChange}/>
    );
};

Input.propTypes = {
    id : PropTypes.string, 
    name : PropTypes.string,
    placeholer : PropTypes.string,
    value : PropTypes.string,
    onChange : PropTypes.func,
};

export default Input;