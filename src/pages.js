import React from 'react';
import { useLocation } from "react-router-dom";
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


const floatingViewPortfolioList = [
  {label: 'Graphics Corrections Tool', link: 'portfolio/graphics-corrections-tool'},
  {label: 'Referral Service Landing Page', link: 'portfolio/referral-service-landing-page'}
]
export function Portfolio(props) {
  return (
    <React.Fragment>
      <FloatingView label="Portfolio">
        <List switchPage={props.switchPage}>
          {floatingViewPortfolioList}
        </List>
      </FloatingView>
      <div className="layouts layout-col-3-alt">
        <div className="col-1"><ItemBanner switchPage={props.switchPage} title={portfolio['luminal'].meta.title} url="portfolio/luminal" cover={portfolio['luminal'].images.bannerCover}/></div>
        <div className="col-2"><ItemBanner switchPage={props.switchPage} title={portfolio['forcebrands-newsroom'].meta.title} url="portfolio/forcebrands-newsroom" cover={portfolio['forcebrands-newsroom'].images.bannerCover}/></div>
        <div className="col-3"><ItemBanner switchPage={props.switchPage} title={portfolio['forcebrands-jobboard'].meta.title} url="portfolio/forcebrands-jobboard" cover={portfolio['forcebrands-jobboard'].images.bannerCover}/></div>
        <div className="col-4"><ItemBanner switchPage={props.switchPage} title={portfolio['manhattan-bridge-capital'].meta.title} url="portfolio/manhattan-bridge-capital" cover={portfolio['manhattan-bridge-capital'].images.bannerCover}/></div>
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



export function PortfolioView(props) {
  const item = portfolio[props.itemKey];
  return (
    <React.Fragment>
      <FloatingView label="Portfolio">
        <List switchPage={props.switchPage}>
          {floatingViewPortfolioList}
        </List>
      </FloatingView>
      <div className="layouts layout-col-1 padding-off scroll-y">
        <div className="col-1" style={{maxWidth: 1000}}>
          <article>
              <ArticleHeading
                title={item.meta.title}
                buttonLink={item.meta.link}
                meta={[{label: 'Context', value: item.meta.context},{label: 'Duration', value: item.meta.duration},{label: 'Role', value: item.meta.role}]}
                height={400}
                projectHeading
              />
              <div className="article writings">
                {item.jsx}
              </div>
          </article>
        </div>
      </div>
      <div className="Background">
        <GridDots width="1000" height="100%" left={0} centered={true}/>
        <Image styles={{maxWidth: 1000, height: '100%', backgroundImage: `url(${item.images.cover}`}} fade={true}></Image>
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