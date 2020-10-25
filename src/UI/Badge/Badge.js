import React from 'react';
import classes from './Badge.module.scss';

const Badge = props => {
    return (
        <span className={classes.BagdeStyles}>
            {props.children}
        </span>
    )
}

export default Badge