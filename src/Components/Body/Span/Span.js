import React, { useMemo } from "react";
import EllipsisToolTip from 'ellipsis-tooltip-react-chan';
import classes from './Span.module.scss';
import Box from './../../../UI/Box/Box';
import MessageBox from './../../../UI/MessageBox/MessageBox';

const Span = props => {

    const options = useMemo(() => {
        return {
            effect: "solid",
            place: "top",
        }
    }, [])

    return (
        <React.Fragment>
            <MessageBox>
                Self-understandable
            </MessageBox>
            <Box>
                <span className={classes.spanStyles}>
                    <EllipsisToolTip options={options}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eligendi?
                </EllipsisToolTip>
                </span>
            </Box>
        </React.Fragment>
    )
}

export default Span;