import React from 'react';
import { motion } from "framer";
import { portfolio } from '../portfolio.jsx';
import ReactGA from 'react-ga';
import ArticleHeading from '../components/ArticleHeading';
import Article from '../components/Article';
import FloatingView from '../components/FloatingView';
import List from '../components/List';
import Background, { Image } from '../components/Background';
import '../components/Layouts.scss';

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


const floatingViewPortfolioList = [];
for( const property in portfolio ) {
	const p = portfolio[property];
	floatingViewPortfolioList.push({title: p.meta.title, link: `/portfolio/${p.meta.slug}`});
}



export default function PortfolioView(props) {
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
