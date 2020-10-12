import React, { useState } from 'react';
import { request } from 'graphql-request';
import { motion } from "framer";
import ReactGA from 'react-ga';
import ArticleHeading from '../components/ArticleHeading';
import Article from '../components/Article';
import FloatingView from '../components/FloatingView';
import List from '../components/List';
import Background, { Image } from '../components/Background';
import '../components/Layouts.scss';
import { layoutsAnimation } from '../animations';

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

export default function WritingsView(props) {
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