import React, { useState } from 'react';
import { request } from 'graphql-request';
import { motion } from "framer";
import { portfolio } from './portfolio.jsx';
import ReactGA from 'react-ga';
import MyIntro from './page-components/MyIntro';
import ItemBanner from './page-components/ItemBanner';
import ArticleHeading from './page-components/ArticleHeading';
import Article from './page-components/Article';
import FloatingView from './page-components/FloatingView';
import List from './page-components/List';
import BlogList from './page-components/BlogList';
import OptionsPanel from './page-components/OptionsPanel';
import Form from './page-components/Form';
import Background, { GridDots, Image } from './page-components/Background';
import JarolinVargas from './assets/jarolin-vargas.svg';
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

const layoutsStagger = {
	enter: {
		transition: {
			staggerChildren: 0.1
		}
	},
	exit: {
		overflow: 'visible',
		transition: {
			staggerChildren: 0.1
		}
	}
}



export function AboutMe() {
	ReactGA.pageview(window.location.pathname);
	return (
		<React.Fragment>
			<motion.div className="layouts layout-col-2 narrow-col-1 scroll-y" initial="initial" animate="enter" exit="exit" variants={layoutsAnimation}>
				<div style={{height: '200px'}}></div>
				<div className="center-col"><MyIntro/></div>
			</motion.div>
			<Background>
				<motion.img className="my-portrait" src={JarolinVargas} alt="Jarolin Vargas" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}/>
				<GridDots width={140} height={140} bottom={15} right={15}/>
			</Background>
		</React.Fragment>
	)
}



const floatingViewPortfolioList = [];
for( const property in portfolio ) {
	const p = portfolio[property];
	floatingViewPortfolioList.push({title: p.meta.title, link: `/portfolio/${p.meta.slug}`});
}

export function Portfolio(props) {
	ReactGA.pageview(window.location.pathname);
	return (
		<React.Fragment>
			<FloatingView label="More" labelExpanded="More Portfolio" gradient={props.floatingViewGradient}>
				<List>
					{floatingViewPortfolioList.slice(4)}
				</List>
			</FloatingView>
			<motion.div className="layouts layout-col-3-alt padding-off effects-off scroll-y" initial="initial" animate="enter" exit="exit" variants={layoutsStagger}>
				<motion.div className="col-1" variants={layoutColAnimation}><ItemBanner title={portfolio['luminal'].meta.title} url={`portfolio/luminal`} count="01" cover={portfolio['luminal'].images.bannerCover} duration={portfolio['luminal'].meta.duration} context={portfolio['luminal'].meta.context}/></motion.div>
				<motion.div className="col-2" variants={layoutColAnimation}><ItemBanner title={portfolio['forcebrands-newsroom'].meta.title} url="portfolio/forcebrands-newsroom" count="03" cover={portfolio['forcebrands-newsroom'].images.bannerCover} duration={portfolio['forcebrands-newsroom'].meta.duration} context={portfolio['forcebrands-newsroom'].meta.context}/></motion.div>
				<motion.div className="col-3" variants={layoutColAnimation}><ItemBanner title={portfolio['job-board-react-app'].meta.title} url="portfolio/job-board-react-app" count="02" cover={portfolio['job-board-react-app'].images.bannerCover} duration={portfolio['job-board-react-app'].meta.duration} context={portfolio['job-board-react-app'].meta.context}/></motion.div>
				<motion.div className="col-4" variants={layoutColAnimation}><ItemBanner title={portfolio['manhattan-bridge-capital'].meta.title} url="portfolio/manhattan-bridge-capital" count="04" cover={portfolio['manhattan-bridge-capital'].images.bannerCover} duration={portfolio['manhattan-bridge-capital'].meta.duration} context={portfolio['manhattan-bridge-capital'].meta.context}/></motion.div>
			</motion.div>
		</React.Fragment>
	)
}



export function PortfolioView(props) {
	const pathname = window.location.pathname;
	const itemKey = pathname.substring(pathname.lastIndexOf('/') + 1);
	const item = portfolio[itemKey];
	ReactGA.pageview(window.location.pathname);
	return (
		<React.Fragment>
			<FloatingView label="More" labelExpanded="More Portfolio" gradient={props.floatingViewGradient}>
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



let writingsList = [];
const writingsListQuery = `{
	writings(orderBy: createdAt_DESC) {
		id
		listCover {
		  url
		}
		title
		topic
		date
		article_id
	}
}`

export function Writings(props) {
	const [writings, setWritings] = useState(false);

	if( !writingsList.length ) {           
        request('https://api-eu-central-1.graphcms.com/v2/ckd9lt56kglb901z548nw00qe/master', writingsListQuery).then((data) => {
			writingsList = data.writings;
			setWritings(true);
		});
		return false;
	}

	ReactGA.pageview(window.location.pathname);
	return (
		<motion.div className="layouts layout-col-1 scroll-y padding-off" initial="initial" animate="enter" exit="exit" variants={layoutsAnimation}>
			<div className="col-1">
				<BlogList pageGradient={props.pageGradient} list={writingsList}></BlogList>
			</div>
		</motion.div>
	)
}



export function WritingsView(props) {
	const [writing, setWriting] = useState(null);
	const [writingsListFetched, setWritingsListFetch] = useState(false);
	const pathname = window.location.pathname;
	const articleKey = pathname.substring(pathname.lastIndexOf('/') + 1);

	if( !writing ) {
        const query = `{
            writings(where: {id: "${articleKey}"}) {
				listCover {
					url
				}
				viewCover {
					url
				}
				article {
					html
				}
				title
				topic
				date
				article_id
            }
        }`
           
        request('https://api-eu-central-1.graphcms.com/v2/ckd9lt56kglb901z548nw00qe/master', query).then((data) => {
			setWriting(data.writings[0]);
		});
		return false;
	}

	if( !writingsList.length ) {
        request('https://api-eu-central-1.graphcms.com/v2/ckd9lt56kglb901z548nw00qe/master', writingsListQuery).then((data) => {
			writingsList = data.writings;
			setWritingsListFetch(true);
		});
		return false;
	}

	ReactGA.pageview(pathname);
	return (
		<React.Fragment>
			<FloatingView label="More" labelExpanded="More Writings" gradient={props.floatingViewGradient}>
				<List>
					{writingsList}
				</List>
			</FloatingView>
			<motion.div className="layouts layout-col-1 padding-off scroll-y border-right" initial="initial" animate="enter" exit="exit" variants={layoutsAnimation}>
				<div className="col-1" style={{maxWidth: 1000}}>
					<article>
						<ArticleHeading 
							title={writing.title}
							meta={[{label: 'Published', value: writing.date},{label: 'Topic', value: writing.topic}]}
							gradientClass="writings-gradient"
							height={400}
						/>
						<Article>
							{writing.article.html}
						</Article>
					</article>
				</div>
			</motion.div>
			{writing.viewCover &&
				<Background>
					<Image styles={{maxWidth: 1000, height: '100%', backgroundImage: `url(${writing.viewCover.url}`}} fade={true}></Image>
				</Background>
			}
		</React.Fragment>
	)
}



export function Contact(props) {
	const [activeOption, setActiveOption] = useState(null);
	ReactGA.pageview(window.location.pathname);

	const updateActiveOption = (event) => {
		setActiveOption(event.currentTarget.getAttribute('data-option'))
	}

	return (
		<motion.div className="layouts layout-col-2 narrower-col-1 padding-off effects-off scroll-y" initial="initial" animate="enter" exit="exit" variants={layoutsStagger}>
			<div>
				<OptionsPanel activeOption={activeOption} updateActiveOption={updateActiveOption}/>
			</div>
			<div>
				<div className="vertical-cols">
					<div className="form-container" style={{height: '100%'}}>
						{activeOption !== null ? <Form activeOption={activeOption}/> : ''}
					</div>
					<div style={{textAlign: 'right'}}>
						<a href="mailto:jarolinvargas@gmail.com" className="contact-mailto" target="_blank" rel="noopener noreferrer">JarolinVargas@gmail.com</a>
					</div>
				</div>
			</div>
		</motion.div>
	)
}



export function NotFound(props) {
	return (
		<motion.div className="layouts layout-col-1 padding-off effects-off" initial={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 2, opacity: 0}}>
			<div style={{alignSelf: 'center'}}>
				<div className="not-found">
					<h1>404</h1>
				</div>
			</div>
		</motion.div>
	)
}