import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({ button: { id, title, state }, onClick }) => {
    return <button type="button" className={`btn_comm ${state&&state}`} disabled={state&&state==='BUTTON_DISABLED'? true : false} onClick={onClick}>{title}</button>
}

export default Button

Button.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),
    onClick: PropTypes.func
} 