import React, { useRef, useEffect } from 'react';
import { AnimatePresence } from "framer";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { AboutMe, Portfolio, Writings, PortfolioView, WritingsView } from './pages';
import './App.scss';

export default function App() {
  const navRef = useRef(null);

  useEffect(() => {
    repositionActiveTabIndicator();
    window.addEventListener('popstate', (event) => {
      repositionActiveTabIndicator();
    });
  }, []);

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
      <div className="App">
        <nav ref={navRef}>
          <span className="nav-active-page-indicator" style={{backgroundImage: 'linear-gradient(to right, #3af4f5, #164dfe)'}}></span>
          <ul>
            <li className="nav-separator" style={{backgroundImage: 'linear-gradient(to right, #3af4f5, #164dfe)'}}></li>
            <li><NavLink to="/" exact onClick={repositionActiveTabIndicator}>ABOUT ME</NavLink></li>
            <li className="nav-separator" style={{backgroundImage: 'linear-gradient(to right, #3af4f5, #164dfe)'}}></li>
            <li><NavLink to="/portfolio" onClick={repositionActiveTabIndicator}>PORTFOLIO</NavLink></li>
            <li className="nav-separator" style={{backgroundImage: 'linear-gradient(to right, #3af4f5, #164dfe)'}}></li>
            <li><NavLink to="/writings" onClick={repositionActiveTabIndicator}>WRITINGS</NavLink></li>
            <li className="nav-separator" style={{backgroundImage: 'linear-gradient(to right, #3af4f5, #164dfe)'}}></li>
          </ul>
        </nav>
        <div className="frame" style={{borderImageSource: 'linear-gradient(to right, #3af4f5, #164dfe)'}}></div>
        <main className="content">
          <div className="page">
            <Route render={({location}) => (
              <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                  <Route path="/" exact children={<AboutMe/>} />
                  <Route path="/portfolio" exact children={<Portfolio/>} />
                  <Route path="/writings" exact children={<Writings/>} />
                  <Route path="/portfolio/:name" children={<PortfolioView/>} />
                  <Route path="/writings/:id" children={<WritingsView/>} />
                </Switch>
              </AnimatePresence>
            )}/>
          </div>
        </main>
      </div>
    </Router>
  );
}
