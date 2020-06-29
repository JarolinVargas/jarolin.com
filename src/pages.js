import React from 'react';
import { motion } from "framer";
import { portfolio } from './portfolio.jsx';
import { writings } from './writings.jsx';
import MyIntro from './page-components/MyIntro';
import ItemBanner from './page-components/ItemBanner';
import ArticleHeading from './page-components/ArticleHeading';
import Article from './page-components/Article';
import FloatingView from './page-components/FloatingView';
import List from './page-components/List';
import BlogList from './page-components/BlogList';
import Background, { Circle, GridDots, Image, GridLines } from './page-components/Background';
import './page-components/Layouts.scss';

const layoutsAnimation = {
	initial: {
		boxShadow: '0px 0px 0px #000',
		borderColor: 'rgba(255, 255, 255, 0)',
		backgroundColor: 'rgba(255, 255, 255, 0)'
	},
	enter: {
		boxShadow: '0px 0px 30px #000',
		borderColor: 'rgba(255, 255, 255, 0.03)',
		backgroundColor: 'rgba(255, 255, 255, 0.005)'
	},
	exit: {
		boxShadow: '0px 0px 0px #000',
		borderColor: 'rgba(255, 255, 255, 0)',
		backgroundColor: 'rgba(255, 255, 255, 0)'
	}
}

const layoutColAnimation = {
	initial: {
		y: -200,
		opacity: 0
	},
	enter: {
		y: 0,
		opacity: 1
	},
	exit: {
		y: 200,
		opacity: 0,
		transition: {
            ease: 'easeOut'
        }
	}
}



export function AboutMe() {
	return (
		<React.Fragment>
			<motion.div className="layouts layout-col-2 narrow-col-2 scroll-y" initial="initial" animate="enter" exit="exit" variants={layoutsAnimation}>
				<div>
					
				</div>
				<div className="center-col">
					<MyIntro/>
				</div>
			</motion.div>
			<Background>
				<Circle size={300} right={0} top={60} shadow="-50px -50px 50px rgba(0, 0, 0, 0.1)"/>
				<Circle size={300} right={-140} top={-140} shadow="0px 0px 50px rgba(0, 0, 0, 0.2)"/>
				<GridDots width={140} height={140} bottom={10} right={10}/>
			</Background>
		</React.Fragment>
	)
}



const floatingViewPortfolioList = [];
for( const property in portfolio ) {
	const p = portfolio[property];
	floatingViewPortfolioList.push({label: p.meta.title, link: `portfolio/${p.meta.slug}`});
}

export function Portfolio(props) {
	return (
		<React.Fragment>
			<FloatingView label="More" labelExpanded="More Portfolio" pageGradient={props.pageGradient}>
				<List>
					{floatingViewPortfolioList.slice(4)}
				</List>
			</FloatingView>
			<motion.div className="layouts layout-col-3-alt padding-off effects-off" initial="initial" animate="enter" exit="exit" variants={{enter: {transition: {staggerChildren: 0.1}}, exit: {transition: {staggerChildren: 0.1}}}}>
				<motion.div className="col-1" variants={layoutColAnimation}><ItemBanner title={portfolio['luminal'].meta.title} url={`portfolio/luminal`} cover={portfolio['luminal'].images.bannerCover} duration={portfolio['luminal'].meta.duration} context={portfolio['luminal'].meta.context}/></motion.div>
				<motion.div className="col-2" variants={layoutColAnimation}><ItemBanner title={portfolio['forcebrands-newsroom'].meta.title} url="portfolio/forcebrands-newsroom" cover={portfolio['forcebrands-newsroom'].images.bannerCover} duration={portfolio['forcebrands-newsroom'].meta.duration} context={portfolio['luminal'].meta.context}/></motion.div>
				<motion.div className="col-3" variants={layoutColAnimation}><ItemBanner title={portfolio['forcebrands-jobboard'].meta.title} url="portfolio/forcebrands-jobboard" cover={portfolio['forcebrands-jobboard'].images.bannerCover} duration={portfolio['forcebrands-jobboard'].meta.duration} context={portfolio['luminal'].meta.context}/></motion.div>
				<motion.div className="col-4" variants={layoutColAnimation}><ItemBanner title={portfolio['manhattan-bridge-capital'].meta.title} url="portfolio/manhattan-bridge-capital" cover={portfolio['manhattan-bridge-capital'].images.bannerCover} duration={portfolio['manhattan-bridge-capital'].meta.duration} context={portfolio['luminal'].meta.context}/></motion.div>
			</motion.div>
		</React.Fragment>
	)
}



export function PortfolioView(props) {
	const pathname = window.location.pathname;
	const itemKey = pathname.substring(pathname.lastIndexOf('/') + 1);
	const item = portfolio[itemKey];
	return (
		<React.Fragment>
			<FloatingView label="More" labelExpanded="More Portfolio" pageGradient={props.pageGradient}>
				<List>
					{floatingViewPortfolioList}
				</List>
			</FloatingView>
			<motion.div className="layouts layout-col-1 padding-off scroll-y border-right" initial="initial" animate="enter" exit="exit" variants={layoutsAnimation}>
				<div className="col-1" style={{maxWidth: 1000}}>
					<article>
						<ArticleHeading
							title={item.meta.title}
							buttonLink={item.meta.link}
							meta={[{label: 'Context', value: item.meta.context},{label: 'Duration', value: item.meta.duration},{label: 'Role', value: item.meta.role}]}
							height={400}
							projectHeading
							gradientClass="portfolio-gradient"
						/>
						<Article>
							{item.jsx}
						</Article>
					</article>
				</div>
			</motion.div>
			<Background>
				<Image styles={{maxWidth: 1000, height: '100%', backgroundImage: `url(${item.images.cover}`}} fade={true}></Image>
			</Background>
		</React.Fragment>
	)
}



let [writingsList, floatingViewWritingsList] = [[],[]];
for( const property in writings ) {
	const w = writings[property];
	writingsList.push({
		title: w.meta['title'],
		published: w.meta['published'],
		topic: w.meta['topic'],
		slug: w.meta['slug'],
		cover: w.images.cover
	});
	floatingViewWritingsList.push({label: w.meta.title, link: `writings/${w.meta.slug}`})
}

export function Writings(props) {
	return (
		<React.Fragment>
			<motion.div className="layouts layout-col-1 scroll-y padding-off" initial="initial" animate="enter" exit="exit" variants={layoutsAnimation}>
				<div className="col-1">
					<BlogList pageGradient={props.pageGradient} list={writingsList}></BlogList>
				</div>
			</motion.div>
		</React.Fragment>
	)
}



export function WritingsView(props) {
	const pathname = window.location.pathname;
	const articleKey = pathname.substring(pathname.lastIndexOf('/') + 1);
	const article = writings[articleKey];
	return (
		<React.Fragment>
			<FloatingView label="More" labelExpanded="More Writings" pageGradient={props.pageGradient}>
				<List>
					{floatingViewWritingsList}
				</List>
			</FloatingView>
			<motion.div className="layouts layout-col-1 padding-off scroll-y border-right" initial="initial" animate="enter" exit="exit" variants={layoutsAnimation}>
				<div className="col-1" style={{maxWidth: 1000}}>
					<article>
						<ArticleHeading 
							title={article.meta.title}
							meta={[{label: 'Published', value: article.meta.published},{label: 'Topic', value: article.meta.topic}]}
							image={article.images.cover}
							gradientClass="writings-gradient"
						/>
						<Article>
							{article.jsx}
						</Article>
					</article>
				</div>
			</motion.div>
		</React.Fragment>
	)
}