import React,{ useEffect } from 'react';
import Input from "../../atoms/Input/Input";
import './InputInfo.scss'
import { EDIT_STATE } from "../../constants/edit_state";

const InputInfo = (props) => {
    const {id, text, error, isValid, state,validate, ...rest} = props 
    const { name,value,regex } = {...rest}
    useEffect(()=>{
        validate&&validate(name,value,regex)
    },[name,value,regex])
    return (
        <div className="info_input">
            <label htmlFor={id}>{text}</label>
            <Input {...rest} id={id}/>
            {state === EDIT_STATE.VALIDATING && !isValid&&<p className="desc_error">{error}</p>}
        </div>
    );
};

InputInfo.defaultProps = {
    id : 'inputValue',
    placeholder:'input Text',
    text : 'Title text',
    isValid : true,
    state : EDIT_STATE.INIT,
    validate : ()=>{console.log('validate')},
    regex : /\\/,
    error : 'Insert your Error Text'
}

export default InputInfo;