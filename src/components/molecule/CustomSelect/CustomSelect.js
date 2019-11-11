import React from 'react';
import PropTypes from 'prop-types';
import SelectItem from '../../atoms/SlectItem/SelectItem';
import './CustomSelect.scss'


const KEY_DOWN = 40,
      KEY_UP = 38,
      KEY_ENTER = 13,
      BUTTON = 'BUTTON'

const CustomSelect = ({select : {id, name, title, options, value}, selectUpdateHandler}) => {
    const [toggle, actionToggle] = React.useState(false)
    const selctRef = React.useRef(null)
    const toggleChange = (e) => {
        e.preventDefault()
        actionToggle(c => !c)
    }
    const selctOption = (e) => {
        const select = selctRef.current
        const keyCode = e.keyCode
        const button = select.querySelector(BUTTON)
        const list = select.querySelectorAll('ul li')
        const selectedOptionTarget = select.querySelector('ul li[tabIndex="0"]')

        switch(keyCode){
            case KEY_DOWN :
                if(e.target.tagName === BUTTON){
                    selectedOptionTarget.focus()
                }
                if(!e.target.nextElementSibling && e.target.tagName !== BUTTON){
                    e.target.tabIndex = '-1'
                    list[0].tabIndex='0'
                    button.focus()
                    return 
                }
                if(e.target.tagName === 'LI'){
                        e.target.tabIndex = '-1'
                        e.target.nextElementSibling.tabIndex = '0'
                        e.target.nextElementSibling.focus()
                }

                break;
            case KEY_UP :
                if(!e.target.previousElementSibling && e.target.tagName !== BUTTON){
                    e.target.tabIndex = '-1'
                    list[0].tabIndex = '0'
                    button.focus()
                    return 
                }
                if(e.target.tagName === 'LI'){                  
                    e.target.tabIndex = '-1'
                    e.target.previousElementSibling.tabIndex = '0'
                    e.target.previousElementSibling.focus()
                }
              
                break;
            case KEY_ENTER : 

                if(e.target.tagName === 'LI'){
                    toggle&&actionToggle(false)
                    selectUpdateHandler(name, e.target.dataset['value'])
                }   
                break;
        }
    }
    const onClickSelect = (e) => {
        toggle&&actionToggle(false)
        selectUpdateHandler(name, e.target.dataset['value'])
    }
    return (
        <div ref={selctRef} className={`custom_select_comm${toggle ? ' on':''}`} onKeyDown={selctOption}>
            <button type="button" id={id} onClick={toggleChange}><strong>{title}</strong></button>
            <span className="ico_select">{toggle ? 'close' : 'open'}</span>
            <em><span className="screen_out">selected value :</span>{value}</em>
            <ul className="list_option">
                {
                    options&&options.map((option,index) =>{
                        let opt = {
                            option,
                            tabIndex : option === value? 0 : -1
                        } 
                        return <SelectItem  key={`${id}_${index}`}  opt={opt} onClick={onClickSelect} />
                    })
                } 
             </ul>
        </div>
    );
};

CustomSelect.propTypes = {
    select : PropTypes.shape({
        id : PropTypes.string,
        name : PropTypes.string,
        title : PropTypes.string,
        options : PropTypes.array,
        value : PropTypes.string
    }),
    selectUpdateHandler : PropTypes.func.isRequired
};

CustomSelect.defualtValue = {
    select : {
        id : 'customSelect01',
        name : 'select',
        title : 'select value',
        options: ['0','1','2','3','4','5'],
        value : '2'
    }
}

export default CustomSelect;