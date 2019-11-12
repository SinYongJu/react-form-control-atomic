import React,{useState} from 'react';
import PropTypes from 'prop-types';
import SearchTemplate from './template/SearchTemplate';
import SearchWeb from '../organisms/SearchWeb/SearchWeb';

const SearchPage = props => {
    const searcDefault = {
        inp : {
            id : 'searchInp',
            name : 'searchKeyword',
            placeholder : 'search keyword; 이효리, 아이유, 세라',
            value : ''
        },
        button : {
            themeClass : 'btn_white',
            text : '검색',
        }
    }
    const [searchProps , actionSearchProps ] = useState(searcDefault)

    const onSearchInpChange = (e) => {
        actionSearchProps(c => {
            c.inp.value += e.currentTarget.value
            return c 
        })
    }
    const onSearchButtonClick = () => {
        console.log('click')
    }
    return (
        <SearchTemplate search={<SearchWeb searchProps={searchProps} onChange={onSearchInpChange} onClick={onSearchButtonClick} />}/>
    );
};

SearchPage.propTypes = {
    
};

export default SearchPage;