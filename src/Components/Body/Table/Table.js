import React, { useMemo } from "react";
import classes from './Table.module.scss';
import EllipsisTooltip from 'ellipsis-tooltip-react-chan';
import MessageBox from './../../../UI/MessageBox/MessageBox';
import Badge from './../../../UI/Badge/Badge';
import Box from './../../../UI/Box/Box';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Table = props => {

    const options = useMemo(() => {
        return {
            effect: "solid",
            place: "top",
            multiline: true,
            className: classes.toolTipClass,
        }
    }, [])

    const styles = useMemo(() => {
        return {
            float: "left"
        }
    }, [])

    const gridJSON = useMemo(() => {
        var arr = [
            {
                name: "Barbara Liskov",
                place: "New York",
                description: "Liskov helped develop and implement programming languages like CLU.",
                comments: "CLU has become like a guidebook for other programming languages, such as Java, which borrow from its syntax and semantics. She also helped develop Argus, a high-level language designed to support the construction and maintenance of distributed programs."
            },
            {
                name: "Elon Musk",
                place: "South Africa",
                description: "Referred to as the real Iron Man.",
                comments: "Elon Musk is probably best known as the famous CEO of Tesla Motors and SpaceX. However, he got his start with computers. At the age of 12 he began teaching himself to program which later paved the way for the launch of his first company, Zip2. But he didn’t stop there. He went on to become a co-founder of a company that later became PayPal, which allowed him to strike conversations with the brain-children behind Tesla Motors."
            },
            {
                name: "Guido Van Rassum",
                place: "Netherlands",
                description: "Creator of Python",
                comments: "If you’re interested in computers science, then you’ve probably heard of Python, the most popular coding language of 2015 according to codeeval. Python is known for its versatility and is used by countless programmers and companies including Spotify and Dropbox."
            }
        ]
        var content = [];
        for (let [key, value] of Object.entries(arr)) {
            let displayContent = [];
            for (let [k, v] of Object.entries(Object.keys(value))) {
                displayContent.push(
                    <span key={`${key}${k}`}>
                        <EllipsisTooltip options={options} style={styles}>
                            {value[v]}
                        </EllipsisTooltip>
                    </span>
                )
            }
            content.push(
                <div className={classes.rowWrapper}>
                    {displayContent}
                </div>
            )
        }
        return content;

    }, [options, styles])

    return (
        <React.Fragment>
            <MessageBox>
                As you minimize the screen width, tooltip dynamically appears on hover wherever the text truncates.
            </MessageBox>
            <Box>
                <span className={classes.titleStyles}>LIST OF IMPORTANT PERSONS</span>
                <div className={classes.container}>
                    <span>
                        <EllipsisTooltip options={options} style={styles}>
                            NAME
                        </EllipsisTooltip>
                    </span>
                    <span>
                        <EllipsisTooltip options={options} style={styles}>
                            PLACE OF BIRTH
                        </EllipsisTooltip>
                    </span>
                    <span>
                        <EllipsisTooltip options={options} style={styles}>
                            DESCRIPTION
                        </EllipsisTooltip>
                    </span>
                    <span>
                        <EllipsisTooltip options={options} style={styles}>
                            COMMENTS
                        </EllipsisTooltip>
                    </span>
                    {gridJSON}
                </div>
            </Box>
            <MessageBox>
                <ul className={classes.listSection}>
                    <li>In the above example, I've set the tooltip styles by passing <Badge>className</Badge> in <Badge>options</Badge> as below:
                    <SyntaxHighlighter language="javascript" style={dark}>
                            {`const options = {
                                    effect: "solid",
                                    place: "top",
                                    multiline: true,
                                    className: "toolTipClass",
                             }`}
                        </SyntaxHighlighter>
                    </li>
                    <li>
                       The above mentioned <Badge>toolTipClass</Badge> is as below (FYI). Needless to say, we can make the tooltip responsive. 
                        <SyntaxHighlighter language="css" style={dark}>
                            {`.toolTipClass {
                                max-width: 200px;
                                overflow-wrap: break-word;
                                display: block;
                            
                                @media (min-width: 600px) {
                                    max-width: 300px;
                                }
                        }`}
                        </SyntaxHighlighter>
                    </li>
                    <li>
                        For more options, refer to <a href="https://www.npmjs.com/package/react-tooltip" target="_blank" rel="noopener noreferrer">React-tooltip</a> documentation.
                    </li>
                </ul>
            </MessageBox>
        </React.Fragment>
    )
}

export default Table;