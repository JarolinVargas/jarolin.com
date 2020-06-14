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
  const [page, setPage] = useState({
    active: 'second-page',
    path: ''
  });

  useEffect(() => {
    switchPage();
    window.addEventListener('popstate', (event) => {
      repositionActiveTabIndicator();
    });
  }, []);

  const switchPage = (pathName, event) => {
    setPage({
      active: page.active === 'first-page' ? 'second-page' : 'first-page',
      path: pathName
    });
    repositionActiveTabIndicator(event);
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
            <li><NavLink to="/" exact onClick={(event) => switchPage('/', event)}>ABOUT ME</NavLink></li>
            <li className="nav-separator"></li>
            <li><NavLink to="/portfolio" onClick={(event) => switchPage('/portfolio', event)}>PORTFOLIO</NavLink></li>
            <li className="nav-separator"></li>
            <li><NavLink to="/writings" onClick={(event) => switchPage('/writings', event)}>WRITINGS</NavLink></li>
            <li className="nav-separator"></li>
          </ul>
        </nav>
        <div className="frame"></div>
        <main className="content" ref={ref}>
          <div className="page" data-active={pathname} style={{backgroundColor: 'rgba(255, 255, 255, 0.02)'}}>
              <Route render={({location}) => (
                <AnimatePresence exitBeforeEnter initial={false}>
                  <Switch location={location} key={location.pathname}>
                    <Route path="/" exact children={<AboutMe/>} />
                    <Route path="/portfolio" exact children={<Portfolio switchPage={switchPage}/>} />
                    <Route path="/writings" exact children={<Writings switchPage={switchPage}/>} />
                    <Route path="/portfolio/:name" children={<PortfolioView itemKey={itemKey} switchPage={switchPage}/>} />
                    <Route path="/writings/:id" children={<WritingsView writingKey={itemKey} switchPage={switchPage}/>} />
                  </Switch>
                </AnimatePresence>
              )}/>
          </div>
        </main>
      </div>
    </Router>
  );
}
