import React, { useEffect, useState } from 'react';
import { motion } from "framer";
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ReactGA from 'react-ga';
import ArticleHeading from '../components/ArticleHeading';
import Article from '../components/Article';
import Background, { Image } from '../components/Background';
import { accessToken, spaceId } from '../snippets/contentful-keys';
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

export default function PortfolioView(props) {
	const [portfolioItem, setPortfolioItem] = useState(null);

	useEffect(() => {
		const pathname = window.location.pathname;
		const id = pathname.substring(pathname.lastIndexOf('/') + 1);
		const query = `{
			portfolio(id: "${id}") {
				projectTitle
				context
				duration
				url
				role
				featuredSpot,
				viewCover {
					url
				},
				details {
					json,
					links {
						assets {
							block {
								fileName
								title
								description
								url
								sys {
									id
								}
							}
						}
					}
				}
			}
		}`

		fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master?access_token=${accessToken}`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({query})
		}).then(res => res.json()).then(response => {
			setPortfolioItem(response.data.portfolio);
		}).catch(() => alert('Failed to load portfolio item. Please reload the page.'));;
		ReactGA.pageview(window.location.pathname);
	}, []);

	if( !portfolioItem ) {
		return false;
	}

	return (
		<React.Fragment>
			<motion.div className="layouts layout-col-1 padding-off scroll-y border-right" initial="initial" animate="enter" exit="exit" variants={layoutsAnimation}>
				<div className="col-1" style={{maxWidth: 1000}}>
					<article>
						<ArticleHeading
							title={portfolioItem.projectTitle}
							buttonLink={portfolioItem.url}
							meta={[{label: 'Context', value: portfolioItem.context},{label: 'Duration', value: portfolioItem.duration},{label: 'Role', value: portfolioItem.role}]}
							height={400}
							projectHeading
							gradientClass="portfolio-gradient"
						/>
						<Article>
							{documentToReactComponents(portfolioItem.details.json, getRenderOptions(portfolioItem.details.links))}
						</Article>
					</article>
				</div>
			</motion.div>
			<Background>
				<Image styles={{maxWidth: 1000, height: '100%', backgroundImage: `url(${portfolioItem.viewCover['url']}`}} fade={true}></Image>
			</Background>
		</React.Fragment>
	)
}


function getRenderOptions(links) {
	const assetBlockMap = new Map();
	for (const asset of links.assets.block) {
	  assetBlockMap.set(asset.sys.id, asset);
	}
  
	return {
	  renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node, next) => {
			const asset = assetBlockMap.get(node.data.target.sys.id);
			return <div className="article-img-col-3"><img src={asset.url} alt={asset.title}/></div>
		},
	  }
	}
}
