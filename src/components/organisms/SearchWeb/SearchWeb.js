import React from 'react';
import PropTypes from 'prop-types';
import SearchBox from '../../molecule/SearchBox/SearchBox';

const SearchWeb = ({searchProps, onClick, onChange}) => {
    const { inp,button } = searchProps;
    console.log(inp)
    React.useEffect(()=>{
        console.log(inp)
    },[inp.value])
    return (
        <>
            <SearchBox inp={inp} button={button} onClick={onClick} onChange={onChange}/>
        </>
    );

};

SearchWeb.propTypes = {
    
};

export default SearchWeb;