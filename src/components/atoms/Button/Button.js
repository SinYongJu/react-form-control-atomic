import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

export const BUTTON_THEME = {
    DEFAULT: 'btn_comm',
    BUTTON_RED: 'BUTTON_RED',
    BUTTON_YELLOW: 'BUTTON_YELLOW'
}


const Button = ({ button: { title, state }, onClick }) => {
    return <button type="button" className={`btn_comm ${state&&state}`} disabled={state&&state==='BUTTON_DISABLED'? true : false} onClick={onClick}>{title}</button>
}

export default Button

Button.propTypes = {
    button: PropTypes.shape({
        title: PropTypes.string.isRequired,
        state: PropTypes.string,
    }),
    onClick: PropTypes.func
} 

Button.defaultProps = {
    button: {
        title: 'BUTTON',
        state: null,
    },
    onClick: ()=>{console.log('insult your click')}
} 


