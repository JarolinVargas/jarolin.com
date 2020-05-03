import React from 'react';
import MyIntro from './page-components/MyIntro';
import Separator from './page-components/ItemBanner';
import ItemBanner from './page-components/ItemBanner';
import BlogList from './page-components/BlogList';
import IconLinks from './page-components/IconLinks';
import {GridLines, Circle, GridDots} from './page-components/background/Background';
import './themes.scss';
import './page-components/Layouts.scss';

export function AboutMe() {
  return (
    <React.Fragment>
      <div className="layouts layout-col-2 narrow-col-2">
        <div>
          
        </div>
        <div className="center-col">
          <MyIntro/>
          <IconLinks/>
        </div>
      </div>
      <div className="Background">
        <GridLines/>
        <Circle size={300} right={0} top={60} shadow="-50px -50px 50px rgba(0, 0, 0, 0.1)"/>
        <Circle size={300} right={-140} top={-140} shadow="0px 0px 50px rgba(0, 0, 0, 0.2)"/>
        <GridDots width={140} height={140} bottom={10} right={10}/>
      </div>
    </React.Fragment>
  )
}



export function Projects(props) {
  return (
    <React.Fragment>
      <div className="layouts layout-col-3-alt padding-off">
        <div className="col-1"><ItemBanner switchPage={props.switchPage}/></div>
        <div className="col-2"><ItemBanner switchPage={props.switchPage}/></div>
        <div className="col-3"><ItemBanner switchPage={props.switchPage}/></div>
        <div className="col-4"><ItemBanner switchPage={props.switchPage}/></div>
      </div>
      <div className="Background">
        <GridDots width="100%" height="100%" bottom={0} right={0}/>
      </div>
    </React.Fragment>
  )
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