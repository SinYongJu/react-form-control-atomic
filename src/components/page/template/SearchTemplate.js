import React from 'react';
import PropTypes from 'prop-types';

const SearchTemplate = props => {
    const {search} = props
    return (
        <>
          <div className="area_search">{search}</div>  
        </>
    );
};

SearchTemplate.propTypes = {
    
};

export default SearchTemplate;