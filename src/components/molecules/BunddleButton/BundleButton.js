import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../atoms/Button/Button'
import './BundleButton.scss'


const BundleButton = ({button: { id, title, state }, onClick}) => {
    return (
        <div className="bundle_btns">
            <Button button={{id, title, state}} onClick={onClick}/><Button button={{id, title, state}} onClick={onClick}/>
        </div>
    )
}

export default BundleButton

