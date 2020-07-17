import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from "framer";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { AboutMe, Portfolio, Writings, PortfolioView, WritingsView, Contact } from './pages';
import './App.scss';

const gradients = {
	pages: {
		'/': 'linear-gradient(to right, #3af4f5, #164dfe)',
		'/portfolio': 'linear-gradient(to right, #c9fa84, #06b5ca)',
		'/writings': 'linear-gradient(to right, #ff615c, #f0de72)',
		'/contact': 'linear-gradient(to right, #fe69f1, #e22525)'
	},
	floatingView: {
		'/': 'linear-gradient(326deg, #3af4f5 0%, #164dfe 74%)',
		'/portfolio': 'linear-gradient(326deg, #06b5ca 0%, #8ce1a0 74%)',
		'/writings': 'linear-gradient(326deg, #f0de72 0%, #ff615c 74%)'
	}
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
					<motion.span className="nav-active-page-indicator" style={{left: path.activePageIndicatorPos}} animate={{backgroundImage: gradients.pages[path.path]}} transition={{duration: 2}}></motion.span>
					<ul>
						<motion.li className="nav-separator" animate={{backgroundImage: gradients.pages[path.path]}} transition={{duration: 2}}></motion.li>
						<li><NavLink to="/" exact onClick={updatePath}>ABOUT ME</NavLink></li>
						<motion.li className="nav-separator" animate={{backgroundImage: gradients.pages[path.path]}} transition={{duration: 2}}></motion.li>
						<li><NavLink to="/portfolio" onClick={updatePath}>PORTFOLIO</NavLink></li>
						<motion.li className="nav-separator" animate={{backgroundImage: gradients.pages[path.path]}} transition={{duration: 2}}></motion.li>
						<li><NavLink to="/writings" onClick={updatePath}>WRITINGS</NavLink></li>
						<motion.li className="nav-separator" animate={{backgroundImage: gradients.pages[path.path]}} transition={{duration: 2}}></motion.li>
						<li><NavLink to="/contact" onClick={updatePath}>CONTACT</NavLink></li>
						<motion.li className="nav-separator" animate={{backgroundImage: gradients.pages[path.path]}} transition={{duration: 2}}></motion.li>
					</ul>
				</nav>
				<motion.div className="frame" animate={{borderImageSource: gradients.pages[path.path]}} transition={{duration: 2}}>
					<main className="content">
						<div className="page">
							<Route render={({location}) => (
								<AnimatePresence exitBeforeEnter initial={false}>
									<Switch location={location} key={location.pathname}>
										<Route path="/" exact children={<AboutMe pageGradient={gradients.pages['/']} floatingViewGradient={gradients.floatingView['/']}/>} />
										<Route path="/portfolio" exact children={<Portfolio pageGradient={gradients.pages['/portfolio']} floatingViewGradient={gradients.floatingView['/portfolio']}/>} />
										<Route path="/writings" exact children={<Writings pageGradient={gradients.pages['/writings']} floatingViewGradient={gradients.floatingView['/writings']}/>} />
										<Route path="/portfolio/:name" children={<PortfolioView pageGradient={gradients.pages['/portfolio']} floatingViewGradient={gradients.floatingView['/portfolio']}/>} />
										<Route path="/writings/:id" children={<WritingsView pageGradient={gradients.pages['/writings']} floatingViewGradient={gradients.floatingView['/writings']}/>} />
										<Route path="/contact" exact children={<Contact pageGradient={gradients.pages['/contact']} floatingViewGradient={gradients.floatingView['/contact']}/>} />
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
