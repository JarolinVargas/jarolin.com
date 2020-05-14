import React from 'react';
import { projects } from './projects-case-studies.jsx';
import MyIntro from './page-components/MyIntro';
import Separator from './page-components/ItemBanner';
import ItemBanner from './page-components/ItemBanner';
import ArticleBanner from './page-components/ArticleBanner';
import BlogList from './page-components/BlogList';
import IconLinks from './page-components/IconLinks';
import ListLabel from './page-components/ListLabel';
import ProjectButton from './page-components/ProjectButton';
import FloatingView from './page-components/FloatingView';
import { GridLines, Circle, GridDots } from './page-components/background/Background';
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
      <FloatingView></FloatingView>
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


export function Thoughts(props) {
  return (
    <React.Fragment>
      <FloatingView></FloatingView>
      <div className="layouts layout-col-4-alt padding-off col-separator-dash">
        <div className="col-1"><ArticleBanner switchPage={props.switchPage}/></div>
        <div className="col-2"><ArticleBanner switchPage={props.switchPage}/></div>
        <div className="col-3"><ArticleBanner switchPage={props.switchPage}/></div>
        <div className="col-4"><ArticleBanner switchPage={props.switchPage}/></div>
      </div>
      <div className="Background">
        
      </div>
    </React.Fragment>
  )
}



export function ProjectView() {
  return (
    <React.Fragment>
      <div className="layouts layout-col-2 narrower-col-1">
        <div>
          {projects['luminal-website-builder'].jsx}
        </div>
        <div>
          <div className="layouts-vertical" style={{position: 'sticky', top: 50}}>
            <div>
              <ProjectButton/>
            </div>
            <div>
              <ListLabel style={{marginTop: 120}}/>
            </div>
          </div>
        </div>
      </div>
      <div className="Background">
        {/*<GridDots width="100%" height="400" right={330}/>*/}
      </div>
    </React.Fragment>
  )
}



export function ThoughtView() {
  return (
    <React.Fragment>
      dlf
    </React.Fragment>
  )
}