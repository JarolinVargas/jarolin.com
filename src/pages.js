import React from 'react';
import { portfolio } from './portfolio-case-studies.jsx';
import { writings } from './writings.jsx';
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



export function Writings(props) {
  const getArticleMeta = (i, k) => {
    return writings[Object.keys(writings)[i]].meta[k];
  }

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
        <div className="col-1" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/writings/placeholder.jpg`}}><ArticleBanner switchPage={props.switchPage} title={getArticleMeta(0, 'title')} summary={getArticleMeta(0, 'summary')} date={getArticleMeta(0, 'date')} category={getArticleMeta(0, 'category')} url={`writings/${getArticleMeta(0, 'slug')}`}/></div>
        <div className="col-2" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/writings/placeholder.jpg`}}><ArticleBanner switchPage={props.switchPage} title={getArticleMeta(1, 'title')} summary={getArticleMeta(1, 'summary')} date={getArticleMeta(1, 'date')} category={getArticleMeta(1, 'category')} url={`writings/${getArticleMeta(1, 'slug')}`}/></div>
        <div className="col-3" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/writings/placeholder.jpg`}}><ArticleBanner switchPage={props.switchPage} title={getArticleMeta(0, 'title')} summary={getArticleMeta(0, 'summary')} date={getArticleMeta(0, 'date')} category={getArticleMeta(0, 'category')} url={`writings/${getArticleMeta(0, 'slug')}`}/></div>
        <div className="col-4" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/writings/placeholder.jpg`}}><ArticleBanner switchPage={props.switchPage} title={getArticleMeta(0, 'title')} summary={getArticleMeta(0, 'summary')} date={getArticleMeta(0, 'date')} category={getArticleMeta(0, 'category')} url={`writings/${getArticleMeta(0, 'slug')}`}/></div>
      </div>
    </React.Fragment>
  )
}



export function WritingsView(props) {
  const article = writings[props.writingKey];
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
              <ArticleHeading 
                title={article.meta.title}
                meta={[{label: 'Published', value: article.meta.published},{label: 'Topic', value: article.meta.topic}]}
                image={`${process.env.PUBLIC_URL}/images/writings/placeholder.jpg`}
              />
              <div className="article writings">
                {article.jsx}
              </div>
          </article>
        </div>
      </div>
    </React.Fragment>
  )
}