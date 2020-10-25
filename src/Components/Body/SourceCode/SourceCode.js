import React from 'react';
import classes from './SourceCode.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const SourceCode = props => {
    return (
        <div className={classes.wrapper}>
            <span> You can find this website's source code here </span>
            <a href="https://github.com/chandrahaswtw/ellipsis-tooltip-demo" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faGithub} size="2x" className={classes.iconStyles}></FontAwesomeIcon>
            </a>
        </div>
    )
}

export default SourceCode;