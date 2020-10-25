import React from 'react';
import classes from "./Header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import npmSVG from './../../Assets/Images/npm.svg';
import ReactTooltip from "react-tooltip";

const Header = props => {

    return (
        <div className={classes.wrapper}>
            <section>
                <div className={classes.headingWrapper}>
                    <section className={classes.textImageSection}>
                        <h2 className={classes.mainHeader}>ellipsis-tooltip-react-chan</h2>
                        <a href="https://www.npmjs.com/package/ellipsis-tooltip-react-chan" target="_blank" rel="noopener noreferrer">
                            <img src={npmSVG} alt="" data-tip data-for="npmDocs"/>
                        </a>
                        <ReactTooltip id="npmDocs" effect="solid" backgroundColor="black" place="top">
                            CLICK TO SEE NPM DOCUMENTATION
                        </ReactTooltip>
                    </section>
                    <a className={classes.subHeader} href="https://www.chandrahasballeda.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faExternalLinkSquareAlt} /> &nbsp; Crafted by Chandrahas Balleda
                    </a>
                </div>
                <div className={classes.forkText}>
                    <a href="https://github.com/chandrahaswtw/ellipsis-tooltip-react-chan" target="_blank" rel="noopener noreferrer">FORK ME ON &nbsp; <FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </section>
        </div>
    )
}

export default Header;