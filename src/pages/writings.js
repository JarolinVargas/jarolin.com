import React, { useState } from 'react';
import { request } from 'graphql-request';
import { motion } from "framer";
import ReactGA from 'react-ga';
import BlogList from '../page-components/BlogList';
import '../page-components/Layouts.scss';

const layoutsAnimation = {
	initial: {
		boxShadow: '0px 0px 0px #000',
		backgroundColor: 'rgba(255, 255, 255, 0)'
	},
	enter: {
		boxShadow: '0px 0px 30px #000',
		backgroundColor: 'rgba(255, 255, 255, 0.005)'
	},
	exit: {
		boxShadow: '0px 0px 0px #000',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		borderColor: 'transparent'
	}
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

export default function Writings(props) {
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