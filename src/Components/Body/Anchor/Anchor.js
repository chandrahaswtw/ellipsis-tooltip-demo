import React, { useMemo } from "react";
import EllipsisToolTip from 'ellipsis-tooltip-react-chan';
import classes from './Anchor.module.scss';
import Box from './../../../UI/Box/Box';
import MessageBox from './../../../UI/MessageBox/MessageBox';
import Badge from './../../../UI/Badge/Badge';

const Anchor = props => {

    const options = useMemo(() => {
        return {
            effect: "solid",
            place: "top",
            backgroundColor: "#fdcb6e"
        }
    }, [])

    return (
        <React.Fragment>
            <MessageBox>
                Pass <Badge>backgroundColor</Badge> in <Badge>options</Badge> to set the background color of the tooltip
            </MessageBox>
            <Box>
                <span className={classes.spanStyles}>
                    <EllipsisToolTip options={options}>
                        <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eligendi?</a>
                    </EllipsisToolTip>
                </span>
            </Box>
        </React.Fragment>
    )
}

export default Anchor;