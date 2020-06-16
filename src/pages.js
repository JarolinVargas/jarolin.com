import React from 'react';
import { motion } from "framer";
import { portfolio } from './portfolio-case-studies.jsx';
import { writings } from './writings.jsx';
import MyIntro from './page-components/MyIntro';
import ItemBanner from './page-components/ItemBanner';
import ArticleBanner from './page-components/ArticleBanner';
import ArticleHeading from './page-components/ArticleHeading';
import Article from './page-components/Article';
import IconLinks from './page-components/IconLinks';
import FloatingView from './page-components/FloatingView';
import List from './page-components/List';
import { GridLines, Circle, GridDots, Image } from './page-components/Background';
import './page-components/Layouts.scss';

const animations = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}

export function AboutMe() {
  return (
    <React.Fragment>
      <motion.div className="layouts layout-col-2 narrow-col-2 scroll-y" initial="initial" animate="enter" exit="exit" variants={animations}>
        <div>
          
        </div>
        <div className="center-col">
          <MyIntro/>
          <IconLinks/>
        </div>
      </motion.div>
      <motion.div className="Background" initial="initial" animate="enter" exit="exit" variants={animations}>
        {/*<GridLines/>*/}
        <Circle size={300} right={0} top={60} shadow="-50px -50px 50px rgba(0, 0, 0, 0.1)"/>
        <Circle size={300} right={-140} top={-140} shadow="0px 0px 50px rgba(0, 0, 0, 0.2)"/>
        <GridDots width={140} height={140} bottom={10} right={10}/>
      </motion.div>
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
        <List>
          {floatingViewPortfolioList}
        </List>
      </FloatingView>
      <div className="layouts layout-col-3-alt padding-off effects-off">
        <div className="col-1"><ItemBanner title={portfolio['luminal'].meta.title} url="portfolio/luminal" cover={portfolio['luminal'].images.bannerCover} animDelay={.20}/></div>
        <div className="col-2"><ItemBanner title={portfolio['forcebrands-newsroom'].meta.title} url="portfolio/forcebrands-newsroom" cover={portfolio['forcebrands-newsroom'].images.bannerCover} animDelay={.25}/></div>
        <div className="col-3"><ItemBanner title={portfolio['forcebrands-jobboard'].meta.title} url="portfolio/forcebrands-jobboard" cover={portfolio['forcebrands-jobboard'].images.bannerCover} animDelay={.30}/></div>
        <div className="col-4"><ItemBanner title={portfolio['manhattan-bridge-capital'].meta.title} url="portfolio/manhattan-bridge-capital" cover={portfolio['manhattan-bridge-capital'].images.bannerCover} animDelay={.35}/></div>
      </div>
    </React.Fragment>
  )
}


const floatingViewPortfolioViewList = [
  {label: 'Graphics Corrections Tool', link: 'portfolio/graphics-corrections-tool'},
  {label: 'Referral Service Landing Page', link: 'portfolio/referral-service-landing-page'}
]
export function PortfolioView(props) {
  const pathname = window.location.pathname;
  const itemKey = pathname.substring(pathname.lastIndexOf('/') + 1);
  const item = portfolio[itemKey];
  return (
    <React.Fragment>
      <FloatingView label="Portfolio">
        <List>
          {floatingViewPortfolioViewList}
        </List>
      </FloatingView>
      <div className="layouts layout-col-1 padding-off scroll-y border-right">
        <div className="col-1" style={{maxWidth: 1000}}>
          <article>
              <ArticleHeading
                title={item.meta.title}
                buttonLink={item.meta.link}
                meta={[{label: 'Context', value: item.meta.context},{label: 'Duration', value: item.meta.duration},{label: 'Role', value: item.meta.role}]}
                height={400}
                projectHeading
              />
              <Article>
                {item.jsx}
              </Article>
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


const writingsAnimations = {
  initial: {
    x: -100,
    opacity: 0
  },
  enter: {
    x: 0,
    opacity: 1
  },
  exit: {
    x: 100,
    opacity: 0
  }
}

export function Writings(props) {
  const getArticleMeta = (i, k) => {
    return writings[Object.keys(writings)[i]].meta[k];
  }

  return (
    <React.Fragment>
      <FloatingView label="Writings">
        <List>
          {[
            {label: 'React Job Board app', link: 'writings/sdfoisdf'},
            {label: 'React Job Board app', link: 'writings/sdfoisdf'}
          ]}
        </List>
      </FloatingView>
      <div className="layouts layout-col-3-alt layout-reversed article-banners-hover-effect padding-off effects-off">
        <motion.div className="col-1" initial="initial" animate="enter" exit="exit" variants={writingsAnimations} transition={{delay: .30}} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/writings/placeholder.jpg`}}><ArticleBanner title={getArticleMeta(0, 'title')} summary={getArticleMeta(0, 'summary')} date={getArticleMeta(0, 'published')} category={getArticleMeta(0, 'topic')} url={`writings/${getArticleMeta(0, 'slug')}`}/></motion.div>
        <motion.div className="col-2" initial="initial" animate="enter" exit="exit" variants={writingsAnimations} transition={{delay: .20}} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/writings/placeholder.jpg`}}><ArticleBanner title={getArticleMeta(1, 'title')} summary={getArticleMeta(1, 'summary')} date={getArticleMeta(1, 'published')} category={getArticleMeta(1, 'topic')} url={`writings/${getArticleMeta(1, 'slug')}`}/></motion.div>
        <motion.div className="col-3" initial="initial" animate="enter" exit="exit" variants={writingsAnimations} transition={{delay: .25}} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/writings/placeholder.jpg`}}><ArticleBanner title={getArticleMeta(0, 'title')} summary={getArticleMeta(0, 'summary')} date={getArticleMeta(0, 'published')} category={getArticleMeta(0, 'topic')} url={`writings/${getArticleMeta(0, 'slug')}`}/></motion.div>
        <motion.div className="col-4" initial="initial" animate="enter" exit="exit" variants={writingsAnimations} transition={{delay: .35}} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/writings/placeholder.jpg`}}><ArticleBanner title={getArticleMeta(0, 'title')} summary={getArticleMeta(0, 'summary')} date={getArticleMeta(0, 'published')} category={getArticleMeta(0, 'topic')} url={`writings/${getArticleMeta(0, 'slug')}`}/></motion.div>
      </div>
    </React.Fragment>
  )
}



export function WritingsView(props) {
  const pathname = window.location.pathname;
  const articleKey = pathname.substring(pathname.lastIndexOf('/') + 1);
  const article = writings[articleKey];
  return (
    <React.Fragment>
      <FloatingView label="Writings">
        <List>
          {[
            {label: 'React Job Board app', link: '/writings/some'},
            {label: 'React Job Board app', link: '/writings/some'}
          ]}
        </List>
      </FloatingView>
      <div className="layouts layout-col-1 padding-off border-right scroll-y">
        <div className="col-1" style={{maxWidth: 1000}}>
          <article>
              <ArticleHeading 
                title={article.meta.title}
                meta={[{label: 'Published', value: article.meta.published},{label: 'Topic', value: article.meta.topic}]}
                image={`${process.env.PUBLIC_URL}/images/writings/placeholder.jpg`}
              />
              <Article>
                {article.jsx}
              </Article>
          </article>
        </div>
      </div>
    </React.Fragment>
  )
}