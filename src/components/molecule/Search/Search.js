import React from 'react';
import InputText from '../../atoms/InputText/InputText'
import Button from '../../atoms/Button/Button'
import PropTypes from 'prop-types';
import './Search.scss'

const Search =  ({search : {inp , button} , onChange, onClick}) => {
    return (
        <div className="search_comm">
          <InputText inp={inp} onChange={onChange}/>
          <Button button={button} onClick={onClick}/>
        </div>
    );
};

Search.propTypes = {
  search : PropTypes.shape({
    inp : PropTypes.shape({
      id : PropTypes.string.isRequired,
      placeHolder : PropTypes.string.isRequired,
      value : PropTypes.string
    }),
    button: PropTypes.shape({
        title: PropTypes.string.isRequired,
        state: PropTypes.string,
    }), 
    onChange : PropTypes.func
  })
};

Search.defualtValue = {
  inp : {
      id : 'txt01',
      placeHolder : 'placeHolder',
      value : ''
  },
  onChange : ()=>{}
}

export default Search;