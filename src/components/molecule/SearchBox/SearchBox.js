import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input/Input';
import SimpleButton from '../../atoms/SimpleButton/SimpleButton';
import './SearchBox.scss'

const SearchBox = ({inp, button, onChange, onClick}) => {
    console.log(inp)
    return (
        <div className="box_search">
            <label htmlFor={inp.id}>let's Search {inp.value}</label>
            <Input {...inp} onChange={onChange} />
            <SimpleButton {...button} themeClass={'btn_white'} text={"검색"} onClick={onClick} />
        </div>
    );
};

SearchBox.propTypes = {
    inp : PropTypes.shape({
        id : PropTypes.string, 
        name : PropTypes.string,
        placeholer : PropTypes.string,
        value : PropTypes.string,     
    }),
    button : PropTypes.shape({
        themeClass : PropTypes.string,
        text : PropTypes.string,
    }),
    onChange : PropTypes.func,
    onClick : PropTypes.func,
};

export default SearchBox;

