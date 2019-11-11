import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

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