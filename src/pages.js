import React from 'react';
import MyIntro from './page-components/MyIntro';
import Separator from './page-components/ItemBanner';
import ItemBanner from './page-components/ItemBanner';
import BlogList from './page-components/BlogList';
import './themes.scss';
import './page-components/Layouts.scss';

export function AboutMe() {
  return (
    ''
  );
  /*return (
    <div className="layouts layout-col-2 narrow-col-2">
      <div>
        
      </div>
      <div>
        <MyIntro/>
      </div>
    </div>
  )*/
}



export function Projects(props) {
  return (
    ''
  )
  /*return (
    <div className="layouts layout-col-3">
      <div><ItemBanner switchPage={props.switchPage} fullHeight={true}/></div>
      <div><ItemBanner switchPage={props.switchPage} fullHeight={true}/></div>
      <div><ItemBanner switchPage={props.switchPage} fullHeight={true}/></div>
      <div><ItemBanner switchPage={props.switchPage} fullHeight={true}/></div>
      <div><ItemBanner switchPage={props.switchPage} fullHeight={true}/></div>
      <div><ItemBanner switchPage={props.switchPage} fullHeight={true}/></div>
      <div><ItemBanner switchPage={props.switchPage} fullHeight={true}/></div>
      <div></div>
      <div></div>
    </div>
  )*/
}


export function Thoughts() {
  return (
    ''
  )
  /*return (
    <div className="layouts padding-off">
      <div>
        <BlogList/>
      </div>
    </div>
  )*/
}



export function ProjectView() {
  return (
    <div className="layouts layout-col-2 narrow-col-2">
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}



export function ThoughtView() {
  return (
    <h1>Post id</h1>
  )
}