import React from 'react';
import { motion } from "framer";
import { portfolio } from '../portfolio.jsx';
import ReactGA from 'react-ga';
import ItemBanner from '../page-components/ItemBanner';
import FloatingView from '../page-components/FloatingView';
import List from '../page-components/List';
import '../page-components/Layouts.scss';

const layoutColAnimation = {
	initial: {
		y: -100,
		opacity: 0
	},
	enter: {
		y: 0,
		opacity: 1
	},
	exit: {
		y: 50,
		opacity: 0,
		transition: {
            ease: 'easeOut'
        }
	}
}

const layoutsStagger = {
	enter: {
		transition: {
			staggerChildren: 0.05
		}
	},
	exit: {
		overflow: 'visible',
		transition: {
			staggerChildren: 0.05
		}
	}
}



const floatingViewPortfolioList = [];
for( const property in portfolio ) {
	const p = portfolio[property];
	floatingViewPortfolioList.push({title: p.meta.title, link: `/portfolio/${p.meta.slug}`});
}

export default function Portfolio(props) {
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