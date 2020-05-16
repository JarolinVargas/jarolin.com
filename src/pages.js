import React from 'react';
import { projects } from './projects-case-studies.jsx';
import MyIntro from './page-components/MyIntro';
import Separator from './page-components/ItemBanner';
import ItemBanner from './page-components/ItemBanner';
import ArticleBanner from './page-components/ArticleBanner';
import ArticleHeading from './page-components/ArticleHeading';
import BlogList from './page-components/BlogList';
import IconLinks from './page-components/IconLinks';
import ListLabel from './page-components/ListLabel';
import ProjectButton from './page-components/ProjectButton';
import FloatingView from './page-components/FloatingView';
import articleIMGPlaceholder from './assets/article-img-placeholder.png';
import { GridLines, Circle, GridDots, Image } from './page-components/background/Background';
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
      <div className="layouts layout-col-3-alt">
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
    <FloatingView></FloatingView>
    <div className="layouts layout-col-1 padding-off">
      <div className="col-1" style={{maxWidth: 1000}}>
        <article>
            <ArticleHeading height={400} button="https://link" colReversed/>
            <div className="article writings">
              <p>Luminal Website Builder is part of a personal project I've been working on for a number of years. It allows users with little or no coding experience to build their personal or small business website with an easy-to-use interface. Similar to Wix and Squarespace website builders; users can create responsive and multi-purpose websites by dragging and dropping elements, editing text, changing colors, and changing options of individual elements without writing or editing code.</p> 
            </div>
        </article>
      </div>
    </div>
    <div className="Background">
      <Image styles={{maxWidth: 1000, height: 400}}></Image>
    </div>
  </React.Fragment>
  )
  /*return (
    <React.Fragment>
      <div className="layouts layout-col-2 narrower-col-1">
        <div className="col-1">
          {projects['luminal-website-builder'].jsx}
        </div>
        <div className="col-2">
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
        {/*<GridDots width="100%" height="400" right={330}/>}
      </div>
    </React.Fragment>
  )*/
}



export function ThoughtView() {
  return (
    <React.Fragment>
      <FloatingView></FloatingView>
      <div className="layouts layout-col-1 padding-off">
        <div className="col-1" style={{maxWidth: 1000}}>
          <article>
              <ArticleHeading image={articleIMGPlaceholder}/>
              <div className="article writings">
                <p>Luminal Website Builder is part of a personal project I've been working on for a number of years. It allows users with little or no coding experience to build their personal or small business website with an easy-to-use interface. Similar to Wix and Squarespace website builders; users can create responsive and multi-purpose websites by dragging and dropping elements, editing text, changing colors, and changing options of individual elements without writing or editing code.</p> 
              </div>
          </article>
        </div>
      </div>
      <div className="Background">
        {/*<GridDots width="100%" height="400" right={330}/>*/}
      </div>
    </React.Fragment>
  )
}