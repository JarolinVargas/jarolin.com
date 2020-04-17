import React from 'react';
import { BrowserRouter as Switch, Route, useHistory } from "react-router-dom";
import { AboutMe, Projects, Thoughts, ProjectView } from './pages';

export default function PageContent(props) {
    props.triggerTransition();
    return (
        <Switch>
            <Route path="/" exact children={<AboutMe/>} />
            <Route path="/projects" exact children={<Projects/>} />
            <Route path="/thoughts" exact children={<Thoughts/>} />
            <Route path="/projects/:name" children={<ProjectView/>} />
        </Switch>
    )
}