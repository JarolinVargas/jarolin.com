import React, { useState, useRef, useEffect } from 'react';
import { Frame } from "framer";
import { BrowserRouter as Router, Switch, Route, NavLink, useLocation } from "react-router-dom";
import './App.scss';
import PageContent from './PageContent';

let animations = {
  expandToViewport: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    zIndex: 2,
    transition: {
      duration: .500,
      ease: 'anticipate'
    },
    transitionEnd: {
      width: 0,
      height: 0
    },
  },
  expandToContent: {
    width: '100%',
    height: '100%',
    zIndex: 3,
    position: 'absolute',
    transition: {
      duration: .500,
      ease: 'anticipate'
    },
    transitionEnd: {
      width: '',
      height: ''
    }
  }
}

function App() {
  const [ref, navRef] = [useRef(null), useRef(null)];
  const [page, setPage] = useState({
    theme: 'dark',
    active: 'second-page',
    path: ''
  });

  useEffect(() => {
    switchPage();
    window.addEventListener('popstate', (event) => {
      repositionActiveTabIndicator();
    });
  }, []);

  const switchPage = (pathName, direct, event) => {
    global.updateClickables();
    setPage({
      theme: page.theme === 'light' ? 'dark' : 'light',
      active: page.active === 'first-page' ? 'second-page' : 'first-page',
      path: pathName
      //direct: direct
    });
    repositionActiveTabIndicator(event);
  }

  const updateBodyStyles = () => {
    const viewportPage = window.getComputedStyle(ref.current.querySelector('[data-active="false"]'), null);
    document.body.querySelector('#new-background').style.backgroundColor = viewportPage.getPropertyValue('background-color');
  }

  const repositionActiveTabIndicator = (clickedLink) => {
    if( navRef.current ) {
      const [activeTabEl, indicator] = [!clickedLink ? navRef.current.querySelector('a.active') : clickedLink.target, navRef.current.querySelector('.nav-active-page-indicator')];
      const [activeTabPos, activeTabWidth] = [activeTabEl.offsetLeft, activeTabEl.offsetWidth]
      indicator.style.left = `${activeTabPos + (activeTabWidth / 2) - 3.5}px`;
    }
  }

  /* trigger page switch animation when location changes
  const usePageTransition = () => {
    let location = useLocation();
    React.useEffect(() => {
      if( location.pathname !== page.path ) {
        switchPage(location.pathname, false);
      }
    }, [location]);
  }*/

  let resizeEnd;
  window.addEventListener('resize', function() {
    clearTimeout(resizeEnd);
    resizeEnd = this.setTimeout(function() {
      repositionActiveTabIndicator();
    }, 250);
  });

  if( ref.current ) {
    animations.expandToContent.width = ref.current.offsetWidth;
    animations.expandToContent.height = ref.current.offsetHeight;
  }

  return (
    <Router>
      <div className="App">
        <nav ref={navRef}>
          <span className="nav-active-page-indicator"></span>
          <ul>
            <li className="nav-separator"></li>
            <li><NavLink to="/" exact onClick={(event) => switchPage('/', true, event)}>ABOUT ME</NavLink></li>
            <li className="nav-separator"></li>
            <li><NavLink to="/projects" onClick={(event) => switchPage('/projects', true, event)}>PROJECTS</NavLink></li>
            <li className="nav-separator"></li>
            <li><NavLink to="/thoughts" onClick={(event) => switchPage('/thoughts', true, event)}>THOUGHTS</NavLink></li>
            <li className="nav-separator"></li>
          </ul>
        </nav>
        <div className="frame"></div>
        <main className="content" ref={ref}>
          <Frame className="page page-theme-light" data-active={page.active === 'first-page'} animate={page.active === 'first-page' ? animations.expandToContent : animations.expandToViewport} onAnimationComplete={page.active === 'first-page' ? null : updateBodyStyles} initial={{width:0, height:0}}>
            {page.active === 'first-page' ? <PageContent /*triggerTransition={usePageTransition}*/ switchPage={switchPage} /*direct={page.direct}*/ path={page.path}/> : null}
          </Frame>
          <Frame className="page page-theme-dark" data-active={page.active === 'second-page'} animate={page.active === 'second-page' ? animations.expandToContent : animations.expandToViewport} onAnimationComplete={page.active === 'second-page' ? null : updateBodyStyles} initial={{width:0, height:0}}>
            {page.active === 'second-page' ? <PageContent /*triggerTransition={usePageTransition}*/ switchPage={switchPage} /*direct={page.direct}*/ path={page.path}/> : null}
          </Frame>
        </main>
      </div>
    </Router>
  );
}

export default App;
