import React from 'react';
import Input from "../../atoms/Input/Input";
import './InputInfo.scss'
const InputInfo = (props) => {
    const {id, text, ...rest} = props 
    return (
        <div className="info_input">
            <label htmlFor={id}>{text}</label>
            <Input {...rest} id={id}/>
        </div>
    );
};

InputInfo.defaultProps = {
    id : 'inputValue',
    placeholder:'input Text',
    text : 'Title text',
}

export default InputInfo;