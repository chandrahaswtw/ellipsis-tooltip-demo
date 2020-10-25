import React from 'react';
import classes from './Box.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';

const Box = props => {
    return (
        <section className={classes.wrapper}>
            <div className={classes.inlineWrapper}>
                {props.children}
                <div className={classes.hoverText}>HOVER OVER <FontAwesomeIcon icon={faHandPointUp} /> </div>
            </div>
        </section>
    )
}

export default Box;