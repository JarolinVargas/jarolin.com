import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from "framer";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { AboutMe, Portfolio, Writings, PortfolioView, WritingsView } from './pages';
import './App.scss';

const pageGradients = {
  '/': 'linear-gradient(to right, #3af4f5, #164dfe)',
  '/portfolio': 'linear-gradient(to right, #ffff18, #25cbd7)',
  '/writings': 'linear-gradient(to right, #ff615c, #a800fe)'
}

export default function App() {
  const navRef = useRef(null);
  const [path, setPath] = useState('/' + window.location.pathname.split('/')[1]);

  useEffect(() => {
    repositionActiveTabIndicator();
    window.addEventListener('popstate', (event) => {
    	updatePath();
    });
  }, []);

  const updatePath = (event) => {
	repositionActiveTabIndicator(event);
	setPath(!event ? window.location.pathname : event.target.getAttribute('href'));
  }

  const repositionActiveTabIndicator = (clickedLink) => {
    if( navRef.current ) {
		const [activeTabEl, indicator] = [!clickedLink ? navRef.current.querySelector('a.active') : clickedLink.target, navRef.current.querySelector('.nav-active-page-indicator')];
		const [activeTabPos, activeTabWidth] = [activeTabEl.offsetLeft, activeTabEl.offsetWidth]
		indicator.style.left = `${activeTabPos + (activeTabWidth / 2) - 3.5}px`;
    }
  }

  let resizeEnd;
  window.addEventListener('resize', function() {
    clearTimeout(resizeEnd);
    resizeEnd = this.setTimeout(function() {
      repositionActiveTabIndicator();
    }, 250);
  });

  return (
    <Router>
    	<div className="App" data-path={path}>
			<nav ref={navRef}>
				<motion.span className="nav-active-page-indicator" animate={{backgroundImage: pageGradients[path]}} transition={{duration: 2}}></motion.span>
				<ul>
					<motion.li className="nav-separator" animate={{backgroundImage: pageGradients[path]}} transition={{duration: 2}}></motion.li>
					<li><NavLink to="/" exact onClick={updatePath}>ABOUT ME</NavLink></li>
					<motion.li className="nav-separator" animate={{backgroundImage: pageGradients[path]}} transition={{duration: 2}}></motion.li>
					<li><NavLink to="/portfolio" onClick={updatePath}>PORTFOLIO</NavLink></li>
					<motion.li className="nav-separator" animate={{backgroundImage: pageGradients[path]}} transition={{duration: 2}}></motion.li>
					<li><NavLink to="/writings" onClick={updatePath}>WRITINGS</NavLink></li>
					<motion.li className="nav-separator" animate={{backgroundImage: pageGradients[path]}} transition={{duration: 2}}></motion.li>
				</ul>
			</nav>
			<motion.div className="frame" animate={{borderImageSource: pageGradients[path]}} transition={{duration: 2}}>
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
