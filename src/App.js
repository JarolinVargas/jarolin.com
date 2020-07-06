import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from "framer";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { AboutMe, Portfolio, Writings, PortfolioView, WritingsView } from './pages';
import './App.scss';

const pageGradients = {
	'/': 'linear-gradient(to right, #3af4f5, #164dfe)',
	'/portfolio': 'linear-gradient(to right, #10d48f, #8ad725)',
	'/writings': 'linear-gradient(to right, #ff615c, #f0de72)'
}

export default function App() {
	const navRef = useRef(null);
	const [path, setPath] = useState({
		path: `/${window.location.pathname.split('/')[1]}`,
		activePageIndicatorPos: '90.5px'
	});

	useEffect(() => {
		updatePath();
		window.addEventListener('popstate', (event) => {
			updatePath();
		});

		let resizeEnd;
		window.addEventListener('resize', function() {
			clearTimeout(resizeEnd);
			resizeEnd = this.setTimeout(function() {
				updatePath();
			}, 300);
		});
	}, []);

	const updatePath = (event) => {
		setPath({
			path: !event ? `/${window.location.pathname.split('/')[1]}` : event.target.getAttribute('href'),
			activePageIndicatorPos: repositionActiveTabIndicator(event)
		})
	}

	const repositionActiveTabIndicator = (clickedLink) => {
		if( navRef.current ) {
			const activeTabEl = !clickedLink ? navRef.current.querySelector('a.active') : clickedLink.target;
			const [activeTabPos, activeTabWidth] = [activeTabEl.offsetLeft, activeTabEl.offsetWidth]
			return `${activeTabPos + (activeTabWidth / 2) - 3.5}px`;
		}
	}

	return (
		<Router>
			<div className="App" data-path={path.path}>
				<nav ref={navRef}>
					<motion.span className="nav-active-page-indicator" style={{left: path.activePageIndicatorPos}} animate={{backgroundImage: pageGradients[path.path]}} transition={{duration: 2}}></motion.span>
					<ul>
						<motion.li className="nav-separator" animate={{backgroundImage: pageGradients[path.path]}} transition={{duration: 2}}></motion.li>
						<li><NavLink to="/" exact onClick={updatePath}>ABOUT ME</NavLink></li>
						<motion.li className="nav-separator" animate={{backgroundImage: pageGradients[path.path]}} transition={{duration: 2}}></motion.li>
						<li><NavLink to="/portfolio" onClick={updatePath}>PORTFOLIO</NavLink></li>
						<motion.li className="nav-separator" animate={{backgroundImage: pageGradients[path.path]}} transition={{duration: 2}}></motion.li>
						<li><NavLink to="/writings" onClick={updatePath}>WRITINGS</NavLink></li>
						<motion.li className="nav-separator" animate={{backgroundImage: pageGradients[path.path]}} transition={{duration: 2}}></motion.li>
					</ul>
				</nav>
				<motion.div className="frame" animate={{borderImageSource: pageGradients[path.path]}} transition={{duration: 2}}>
					<main className="content">
						<div className="page">
							<Route render={({location}) => (
								<AnimatePresence exitBeforeEnter initial={false}>
									<Switch location={location} key={location.pathname}>
										<Route path="/" exact children={<AboutMe pageGradient={pageGradients['/']}/>} />
										<Route path="/portfolio" exact children={<Portfolio pageGradient={pageGradients['/portfolio']}/>} />
										<Route path="/writings" exact children={<Writings pageGradient={pageGradients['/writings']}/>} />
										<Route path="/portfolio/:name" children={<PortfolioView pageGradient={pageGradients['/portfolio']}/>} />
										<Route path="/writings/:id" children={<WritingsView pageGradient={pageGradients['/writings']}/>} />
									</Switch>
								</AnimatePresence>
							)}/>
						</div>
					</main>
				</motion.div>
			</div>
		</Router>
	);
}
