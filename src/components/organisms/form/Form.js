import React from 'react';
import PropTypes from 'prop-types';
import CustomSelect from '../../molecule/CustomSelect/CustomSelect';
import Search from '../../molecule/Search/Search';



const Form = ({contents :  {search , selectItems }}) => {
    const [ select , actionSelect ] = React.useState({selectItems:[]})
    
    const selectUpdateHandler = (name , value) => {
        console.log(name, value)
        actionSelect(c => {
            for(let item of c.selectItems){
                if(item.name === name){
                    item.value = value
                }
            }
            return {...c}
        })   
    }


    React.useEffect(()=>{
        actionSelect(c => ({
            ...c,
            ...search,
            selectItems : [...selectItems],
        }))
       
    },[])

    return (
        <div>
            <div style={{'padding':'3em'}}>
                <Search search={search}/>                
            </div>
            {
                select.selectItems ? select.selectItems.map((item,index) => {
                   return  <div key={`${item}__${index}`} style={{'padding':'3em'}}>
                     <CustomSelect select={item} selectUpdateHandler={selectUpdateHandler} />
                    </div>
                }) :  <div>loading</div>
              
            }
        </div>
    );
};

Form.propTypes = {
    
}

Form.defualtValue = {
    select : {
        id : 'customSelect01',
        name : 'select',
        title : 'select value',
        options: ['0','1','2','3','4','5'],
        value : '0'
    },
    onClick : ()=>{ console.log('click') },
}


export default Form;