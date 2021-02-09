import React, { useState } from 'react';
import { motion } from "framer";
import ReactGA from 'react-ga';
import ItemBanner from '../components/ItemBanner';
import FloatingView from '../components/FloatingView';
import List from '../components/List';
import { accessToken, spaceId } from '../snippets/contentful-keys';
import '../components/Layouts.scss';
import { layoutColAnimation, layoutsStagger } from '../animations';
let portfolioList = [];
let portfolioListFeatured = [];

const query = `{
	portfolioCollection {
		items {
			projectTitle,
			duration,
			context,
			duration,
			url,
			role,
			featuredSpot,
			bannerCover {
				url
			},
			sys {
				id
			}
		}
	}
}`

export default function Portfolio(props) {
	const [portfolioLoaded, setPortfolioLoaded] = useState(false);

	if( !portfolioList.length && !portfolioLoaded ) {
		fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master?access_token=${accessToken}`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({query})
		}).then(res => res.json()).then(response => {
			portfolioList = response.data.portfolioCollection.items;
			if( !portfolioListFeatured.length ) {
				for( let i = 0; i < 4; i++ ) {
					const featured = portfolioList.find(p => p.featuredSpot === (i + 1));
					portfolioListFeatured.push(featured);
				}
			}
			setPortfolioLoaded(true);
		}).catch(() => alert('Failed to load portfolio items. Please reload the page.'));
		return false;
	}

	ReactGA.pageview(window.location.pathname);

	return (
		<React.Fragment>
			<FloatingView label="More" labelExpanded="More Portfolio" gradient={props.floatingViewGradient}>
				<List portfolioList={portfolioList.filter(p => p.featuredSpot === null)} />
			</FloatingView>
			<motion.div className="layouts layout-col-3-alt padding-off effects-off scroll-y" initial="initial" animate="enter" exit="exit" variants={layoutsStagger}>
				<motion.div className="col-1" variants={layoutColAnimation}>
					<ItemBanner
						title={portfolioListFeatured[0].projectTitle}
						url={`portfolio/${portfolioListFeatured[0].sys['id']}`}
						count="01"
						cover={portfolioListFeatured[0].bannerCover['url']}
						duration={portfolioListFeatured[0].duration}
						context={portfolioListFeatured[0].context}
					/>
				</motion.div>
				<motion.div className="col-2" variants={layoutColAnimation}>
					<ItemBanner
						title={portfolioListFeatured[2].projectTitle}
						url={`portfolio/${portfolioListFeatured[2].sys['id']}`}
						count="03"
						cover={portfolioListFeatured[2].bannerCover['url']}
						duration={portfolioListFeatured[2].duration}
						context={portfolioListFeatured[2].context}
					/>
				</motion.div>
				<motion.div className="col-3" variants={layoutColAnimation}>
					<ItemBanner
						title={portfolioListFeatured[1].projectTitle}
						url={`portfolio/${portfolioListFeatured[1].sys['id']}`}
						count="02"
						cover={portfolioListFeatured[1].bannerCover['url']}
						duration={portfolioListFeatured[1].duration}
						context={portfolioListFeatured[1].context}
					/>
				</motion.div>
				<motion.div className="col-4" variants={layoutColAnimation}>
					<ItemBanner
						title={portfolioListFeatured[3].projectTitle}
						url={`portfolio/${portfolioListFeatured[3].sys['id']}`}
						count="04"
						cover={portfolioListFeatured[3].bannerCover['url']}
						duration={portfolioListFeatured[3].duration}
						context={portfolioListFeatured[3].context}
					/>
				</motion.div>
			</motion.div>
		</React.Fragment>
	)
}