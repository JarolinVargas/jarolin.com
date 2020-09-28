import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from "framer";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AboutMe, Portfolio, Writings, PortfolioView, WritingsView, Contact, NotFound } from './pages';
import './App.scss';

const gradients = {
	pages: {
		'/': 'linear-gradient(to right, #3af4f5, #164dfe)',
		'/portfolio': 'linear-gradient(to right, #c9fa84, #06b5ca)',
		'/writings': 'linear-gradient(to right, #ff615c, #f0de72)',
		'/contact': 'linear-gradient(to right, #FF3CAC, #8700ff)',
		'404': 'linear-gradient(to right, #ff615c, #f0de72)'
	},
	floatingView: {
		'/': 'linear-gradient(326deg, #3af4f5 0%, #164dfe 74%)',
		'/portfolio': 'linear-gradient(326deg, #06b5ca 0%, #8ce1a0 74%)',
		'/writings': 'linear-gradient(326deg, #f0de72 0%, #ff615c 74%)',
		'/contact': 'linear-gradient(326deg, #FF3CAC, #8700ff 74%)'
	}
}

export default function App() {
	const navRef = useRef(null);
	const [mobileNav, setMobileNav] = useState(false);
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
		const pagePath = !event ? `/${window.location.pathname.split('/')[1]}` : event.target.getAttribute('href')
		setPath({
			path: !gradients.pages[pagePath] ? '404' : pagePath,
			activePageIndicatorPos: repositionActiveTabIndicator(event)
		})
	}

	const toggleMobileNav = () => {
		setMobileNav(!mobileNav ? true : false);
	}

	const repositionActiveTabIndicator = (clickedLink) => {
		if( !navRef.current.querySelector('a.active') && !clickedLink ) { return '0px' }
		const activeTabEl = !clickedLink ? navRef.current.querySelector('a.active') : clickedLink.target;
		const [activeTabPos, activeTabWidth] = [activeTabEl.offsetLeft, activeTabEl.offsetWidth]
		return `${activeTabPos + (activeTabWidth / 2) - 3.5}px`;
	}

	return (
		<Router>
			<div className="App" data-path={path.path}>
				<nav className="nav-desktop" ref={navRef}>
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
				<motion.nav className="nav-mobile" animate={{borderImageSource: gradients.pages[path.path]}} transition={{duration: 2}}>
					<motion.ul animate={!mobileNav ? {width: 70, height: 70, borderBottomLeftRadius: '100px', backgroundImage: gradients.pages[path.path]} : {width: 170, height: 260, borderBottomLeftRadius: '30px', backgroundImage: gradients.pages[path.path]}}>
						<li onClick={toggleMobileNav}><FontAwesomeIcon icon={!mobileNav ? faBars : faTimes}></FontAwesomeIcon></li>
						<motion.li onClick={toggleMobileNav}><NavLink to="/" exact onClick={updatePath}>ABOUT ME</NavLink></motion.li>
						<motion.li onClick={toggleMobileNav}><NavLink to="/portfolio" onClick={updatePath}>PORTFOLIO</NavLink></motion.li>
						<motion.li onClick={toggleMobileNav}><NavLink to="/writings" onClick={updatePath}>WRITINGS</NavLink></motion.li>
						<motion.li onClick={toggleMobileNav}><NavLink to="/contact" onClick={updatePath}>CONTACT</NavLink></motion.li>
					</motion.ul>
				</motion.nav>
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
										<Route path="/writings/:id/:title" children={<WritingsView pageGradient={gradients.pages['/writings']} floatingViewGradient={gradients.floatingView['/writings']}/>} />
										<Route path="/contact" exact children={<Contact pageGradient={gradients.pages['/contact']} floatingViewGradient={gradients.floatingView['/contact']}/>} />
										<Route children={<NotFound/>} />
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
