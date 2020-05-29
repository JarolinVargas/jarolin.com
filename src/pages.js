import React from 'react';
import { portfolio } from './portfolio-case-studies.jsx';
import MyIntro from './page-components/MyIntro';
import ItemBanner from './page-components/ItemBanner';
import ArticleBanner from './page-components/ArticleBanner';
import ArticleHeading from './page-components/ArticleHeading';
import IconLinks from './page-components/IconLinks';
import FloatingView from './page-components/FloatingView';
import List from './page-components/List';
import { GridLines, Circle, GridDots, Image } from './page-components/Background';
import './page-components/Layouts.scss';

export function AboutMe() {
  return (
    <React.Fragment>
      <div className="layouts layout-col-2 scroll-y narrow-col-2">
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



export function Portfolio(props) {
  return (
    <React.Fragment>
      <FloatingView label="Portfolio">
        <List switchPage={props.switchPage}>
          {[
            {label: 'Graphics Corrections Tool', link: 'portfolio/something'},
            {label: 'Referral Service Landing Page', link: 'portfolio/something'}
          ]}
        </List>
      </FloatingView>
      <div className="layouts layout-col-3-alt">
        <div className="col-1"><ItemBanner switchPage={props.switchPage} title="Luminal Website Builder &amp; HTML5 Template" url="https://whaaa"/></div>
        <div className="col-2"><ItemBanner switchPage={props.switchPage} title="ForceBrands Newsroom Blog" url="https://whaaa"/></div>
        <div className="col-3"><ItemBanner switchPage={props.switchPage} title="ForceBrands Client Job Board" url="https://whaaa"/></div>
        <div className="col-4"><ItemBanner switchPage={props.switchPage} title="Manhattan Bridge Capital" url="https://whaaa"/></div>
      </div>
    </React.Fragment>
  )
}



export function Writings(props) {
  return (
    <React.Fragment>
      <FloatingView label="Writings">
        <List switchPage={props.switchPage}>
          {[
            {label: 'React Job Board app', link: 'writings/sdfoisdf'},
            {label: 'React Job Board app', link: 'writings/sdfoisdf'}
          ]}
        </List>
      </FloatingView>
      <div className="layouts layout-col-3-alt layout-reversed article-banners-hover-effect">
        <div className="col-1" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/writings/placeholder.jpg`}}><ArticleBanner switchPage={props.switchPage}/></div>
        <div className="col-2" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/writings/placeholder.jpg`}}><ArticleBanner switchPage={props.switchPage}/></div>
        <div className="col-3" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/writings/placeholder.jpg`}}><ArticleBanner switchPage={props.switchPage}/></div>
        <div className="col-4" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/writings/placeholder.jpg`}}><ArticleBanner switchPage={props.switchPage}/></div>
      </div>
    </React.Fragment>
  )
}



export function ProjectView(props) {
  return (
    <React.Fragment>
      <FloatingView label="Portfolio">
        <List switchPage={props.switchPage}>
          {[
            {label: 'React Job Board app', link: '/sodif'},
            {label: 'React Job Board app', link: '/sodif'}
          ]}
        </List>
      </FloatingView>
      <div className="layouts layout-col-1 padding-off scroll-y">
        <div className="col-1" style={{maxWidth: 1000}}>
          <article>
              <ArticleHeading height={400} button="https://link" projectHeading/>
              <div className="article writings">
                <p>Luminal Website Builder is part of a personal project I've been working on for a number of years. It allows users with little or no coding experience to build their personal or small business website with an easy-to-use interface. Similar to Wix and Squarespace website builders; users can create responsive and multi-purpose websites by dragging and dropping elements, editing text, changing colors, and changing options of individual elements without writing or editing code.</p> 
              </div>
          </article>
        </div>
      </div>
      <div className="Background">
        <GridDots width="1000" height="100%" left={0} centered={true}/>
        <Image styles={{maxWidth: 1000, height: '100%', backgroundImage: `url(${process.env.PUBLIC_URL}/images/portfolio/luminal-site-builder-cover.png)`}} fade={true}></Image>
      </div>
    </React.Fragment>
  )
}



export function WritingsView(props) {
  return (
    <React.Fragment>
      <FloatingView label="Writings">
        <List switchPage={props.switchPage}>
          {[
            {label: 'React Job Board app', link: '/writings/some'},
            {label: 'React Job Board app', link: '/writings/some'}
          ]}
        </List>
      </FloatingView>
      <div className="layouts layout-col-1 padding-off scroll-y">
        <div className="col-1" style={{maxWidth: 1000}}>
          <article>
              <ArticleHeading image={`${process.env.PUBLIC_URL}/images/writings/placeholder.jpg`}/>
              <div className="article writings">
                <p>Luminal Website Builder is part of a personal project I've been working on for a number of years. It allows users with little or no coding experience to build their personal or small business website with an easy-to-use interface. Similar to Wix and Squarespace website builders; users can create responsive and multi-purpose websites by dragging and dropping elements, editing text, changing colors, and changing options of individual elements without writing or editing code.</p> 
              </div>
          </article>
        </div>
      </div>
    </React.Fragment>
  )
}