import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { AboutMe, Projects, Thoughts } from './pages';

export default function PageContent(props) {
    props.triggerTransition();
    return (
        <Switch>
            <Route path="/" exact children={<AboutMe/>} />
            <Route path="/projects" children={<Projects/>} />
            <Route path="/thoughts" children={<Thoughts/>} />
        </Switch>
    )
}