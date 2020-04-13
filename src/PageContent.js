import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function PageContent(props) {
    props.triggerTransition();
    return (
        <Switch>
            <Route path="/" exact children={<span style={{color:'red'}}></span>} />
            <Route path="/projects" children={<span style={{color:'red'}}></span>} />
            <Route path="/thoughts" children={<span style={{color:'red'}}></span>} />
        </Switch>
    )
}