import React, { useState, useRef, useEffect } from 'react';
import { Frame, AnimatePresence } from "framer";
import { BrowserRouter as Router, Switch, Route, NavLink, useLocation } from "react-router-dom";
import { AboutMe, Portfolio, Writings, PortfolioView, WritingsView } from './pages';
import './App.scss';

const transition = {duration: .500, ease: 'anticipate'}
let animations = {
  exit: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    filter: 'opacity(0)',
    zIndex: 2,
    transition,
    transitionEnd: {
      scale: 0,
      width: 0,
      height: 0
    },
  },
  enter: {
    filter: 'opacity(1)',
    scale: 1,
    zIndex: 3,
    position: 'absolute',
    transition,
    transitionEnd: {
      scale: 1,
      width: '',
      height: ''
    }
  }
}

export default function App() {
  const [ref, navRef] = [useRef(null), useRef(null)];

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

  if( ref.current ) {
    animations.enter.width = ref.current.offsetWidth;
    animations.enter.height = ref.current.offsetHeight;
  }

  const pathname = window.location.pathname;
  const itemKey = pathname.substring(pathname.lastIndexOf('/') + 1);

  return (
    <Router>
      <div className="App">
        <nav ref={navRef}>
          <span className="nav-active-page-indicator"></span>
          <ul>
            <li className="nav-separator"></li>
            <li><NavLink to="/" exact onClick={repositionActiveTabIndicator}>ABOUT ME</NavLink></li>
            <li className="nav-separator"></li>
            <li><NavLink to="/portfolio" onClick={repositionActiveTabIndicator}>PORTFOLIO</NavLink></li>
            <li className="nav-separator"></li>
            <li><NavLink to="/writings" onClick={repositionActiveTabIndicator}>WRITINGS</NavLink></li>
            <li className="nav-separator"></li>
          </ul>
        </nav>
        <div className="frame"></div>
        <main className="content" ref={ref}>
          <div className="page">
            <Route render={({location}) => (
              <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                  <Route path="/" exact children={<AboutMe/>} />
                  <Route path="/portfolio" exact children={<Portfolio/>} />
                  <Route path="/writings" exact children={<Writings/>} />
                  <Route path="/portfolio/:name" children={<PortfolioView itemKey={itemKey}/>} />
                  <Route path="/writings/:id" children={<WritingsView writingKey={itemKey}/>} />
                </Switch>
              </AnimatePresence>
            )}/>
          </div>
        </main>
      </div>
    </Router>
  );
}
