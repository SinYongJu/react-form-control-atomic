import React from 'react';
import PropTypes from 'prop-types';
import './InputText.scss'

const InputText = ( {inp:{id , placeHolder}, onChange} ) => {
    return (
        <input type="text" id={id} placeholder={placeHolder} className="inp_txt" onChange={onChange}/>
    );
};

InputText.propTypes = {
    inp : PropTypes.shape({
        id : PropTypes.string.isRequired,
        placeHolder : PropTypes.string.isRequired,
        onChange : PropTypes.func
    }) 
};

export default InputText;