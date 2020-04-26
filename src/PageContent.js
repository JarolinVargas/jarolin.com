import React from 'react';
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom";
import { AboutMe, Projects, Thoughts, ProjectView, ThoughtView } from './pages';

export default function PageContent(props) {
    return (
        <Switch>
            <Route path="/" exact children={<AboutMe/>} />
            <Route path="/projects" exact children={<Projects switchPage={props.switchPage}/>} />
            <Route path="/thoughts" exact children={<Thoughts/>} />
            <Route path="/projects/:name" children={<ProjectView/>} />
            <Route path="/thoughts/:id" children={<ThoughtView/>} />
        </Switch>
    )
}