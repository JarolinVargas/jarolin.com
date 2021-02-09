import React, { useState, useEffect } from 'react';
import { motion } from "framer";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ReactGA from 'react-ga';
import ArticleHeading from '../components/ArticleHeading';
import Article from '../components/Article';
import Background, { Image } from '../components/Background';
import { accessToken, spaceId } from '../snippets/contentful-keys';
import '../components/Layouts.scss';
import { layoutsAnimation } from '../animations';

export default function WritingsView(props) {
	const [writing, setWriting] = useState(null);

	useEffect(() => {
		const pathname = window.location.pathname;
		const writingId = pathname.split('/')[2];
		const query = `{
			writings(id: "${writingId}") {
				title
				topic
				published
				viewCover {
					url
				}
				article {
					json
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
			setWriting(response.data.writings);
		}).catch(() => alert('Failed to load post. Please reload the page.'));;
		ReactGA.pageview(pathname);
	}, []);

	if( !writing ) {
		return false;
	}

	return (
		<React.Fragment>
			<motion.div className="layouts layout-col-1 padding-off scroll-y border-right" initial="initial" animate="enter" exit="exit" variants={layoutsAnimation}>
				<div className="col-1" style={{maxWidth: 1000}}>
					<article>
						<ArticleHeading
							title={writing.title}
							meta={[{label: 'Published', value: writing.published},{label: 'Topic', value: writing.topic}]}
							gradientClass="writings-gradient"
							height={400}
						/>
						<Article>
							{documentToReactComponents(writing.article.json)}
						</Article>
					</article>
				</div>
			</motion.div>
			{writing.viewCover &&
				<Background>
					<Image styles={{maxWidth: 1000, height: '100%', backgroundImage: `url(${writing.viewCover['url']}`}} fade={true}></Image>
				</Background>
			}
		</React.Fragment>
	)
}