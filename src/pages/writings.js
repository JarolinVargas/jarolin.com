import React, { useState } from 'react';
import { motion } from "framer";
import ReactGA from 'react-ga';
import BlogList from '../components/BlogList';
import { accessToken, spaceId } from '../snippets/contentful-keys';
import '../components/Layouts.scss';
import { layoutsAnimation } from '../animations';

let writingsList = [];
const query = `{
	writingsCollection {
		items {
		  title
		  topic
		  published
		  listCover {
			  url
		  }
		  sys {
			  id
		  }
		}
	}
}`

export default function Writings(props) {
	const [writingsLoaded, setWritingsLoaded] = useState(false);

	if( !writingsList.length && !writingsLoaded ) {           
		fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master?access_token=${accessToken}`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({query})
		}).then(res => res.json()).then(response => {
			writingsList = response.data.writingsCollection.items;
			setWritingsLoaded(true);
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