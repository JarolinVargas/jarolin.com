import React from 'react';
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom";
import { AboutMe, Projects, Thoughts, ProjectView, ThoughtView } from './pages';

export default function PageContent(props) {
    /*const location = useLocation();
    if(!props.direct) {
        props.triggerTransition();
    } else if( location.pathname === '/' || location.pathname === '/projects' || location.pathname === '/thoughts' ) {
        props.switchPage(props.pathname, false)
    }*/
    console.log('sdf')
    
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