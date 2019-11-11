import React from 'react';
import PropTypes from 'prop-types';
import './InputText.scss'

const InputText = ( {inp:{id , placeHolder,value}, onChange} ) => {
    return (
        <input type="text" id={id} placeholder={placeHolder}  className="inp_txt" onChange={onChange} value={value}/>
    );
};

InputText.propTypes = {
    inp : PropTypes.shape({
        id : PropTypes.string.isRequired,
        placeHolder : PropTypes.string.isRequired,
        value : PropTypes.string
    }) 
};
InputText.defualtValue = {
    inp : {
        id : 'txt01',
        placeHolder : 'placeHolder',
        value : ''
    },
    onChange : ()=>{}
}

export default InputText;