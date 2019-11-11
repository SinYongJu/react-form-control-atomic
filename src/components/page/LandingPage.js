import React from 'react';
import LandingTemplate from './template/LandingTemplate'
import Form from '../organisms/form/Form'

const LandingPage = () => {


    const search = {
        inp : {
            id : 'search',
            placeHolder : 'search info',
            value : ''
        },
        button : {
            title : '검색', 
            state : 'SEARCH_NORMAL'
        }        

    }
    

    const onChangeSearch = (e) => {
        // e.currentTarget.value 
    }

    const selectNumber = {
        id : 'customSelect01',
        name : 'selectNumber',
        title : 'select value',
        options: ['a','b','c','d','e','f'],
        value : 'a'
    }
    const selectPet = {
        id : 'customSelect02',
        name : 'selectPet',
        title : 'select value',
        options: ['dog','cat','monkey','carmel'],
        value : 'dog'
    }
    
        
    const selectFood = {
        id : 'customSelect02',
        name : 'selectFood',
        title : 'select value',
        options: ['apple','orange','grape','melon'],
        value : 'apple'
    }

    
    const formContents  = {
        search ,
        selectItems : [selectNumber,selectPet,selectFood]
    }

    const contents = {
        form : <Form contents={formContents}></Form>
    }

    return (
        <LandingTemplate contents={contents} />
    );
};

export default LandingPage;