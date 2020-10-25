import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import classes from './Body.module.scss';
import 'react-tabs/style/react-tabs.css';
import Span from './Span/Span';
import Anchor from './Anchor/Anchor';
import Table from './Table/Table';
import SourceCode from './SourceCode/SourceCode';

const Body = props => {
    return (
        <div className={classes.wrapper}>
            <Tabs>
                <TabList>
                    <Tab>TABLE/CSS GRID</Tab>
                    <Tab>ANCHOR</Tab>
                    <Tab>SPAN</Tab>
                    <Tab>SOURCE CODE</Tab>
                </TabList>

                <TabPanel>
                    <Table></Table>
                </TabPanel>
                <TabPanel>
                    <Anchor></Anchor>
                </TabPanel>
                <TabPanel>
                    <Span></Span>
                </TabPanel>
                <TabPanel>
                    <SourceCode></SourceCode>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Body;