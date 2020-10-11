import React from 'react';
import { motion } from "framer";
import '../page-components/Layouts.scss';

export default function NotFound(props) {
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