import React, { useState, useRef } from 'react';
import { Frame } from "framer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useLocation
} from "react-router-dom";
import './App.scss';
import PageContent from './PageContent';

let animations = {
  expandToViewport: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    zIndex: 2,
    transition: {
      duration: .500
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
      duration: .500
    },
    transitionEnd: {
      width: '',
      height: ''
    }
  }
}

function App() {
  const ref = useRef(null);
  const [page, setPage] = useState({
    theme: 'light',
    active: 'first-page',
    path: '/'
  });

  const switchPage = (pathName) => {
    setPage({
      theme: page.theme === 'light' ? 'dark' : 'light',
      active: page.active === 'first-page' ? 'second-page' : 'first-page',
      path: pathName
    })
  }

  const updateBodyStyles = () => {
    const viewportPage = window.getComputedStyle(ref.current.querySelector('[data-active="false"]'), null);
    document.body.style.backgroundColor = viewportPage.getPropertyValue('background-color');
  }

  if(ref.current) {
    animations.expandToContent.width = ref.current.offsetWidth;
    animations.expandToContent.height = ref.current.offsetHeight;
  }

  // trigger page switch animation when location changes
  const usePageTransition = () => {
    let location = useLocation();
    React.useEffect(() => {
      if( location.pathname !== page.path ) {
        switchPage(location.pathname);
      }
      console.log('sdf')
    }, [location]);
  }

  return (
    <Router>
      <div className="App">
        <nav>
          <span className="nav-active-page-indicator"></span>
          <ul>
            <li className="nav-separator"></li>
            <li><NavLink to="/" exact>ABOUT ME</NavLink></li>
            <li className="nav-separator"></li>
            <li><NavLink to="/projects">PROJECTS</NavLink></li>
            <li className="nav-separator"></li>
            <li><NavLink to="/thoughts">THOUGHTS</NavLink></li>
            <li className="nav-separator"></li>
          </ul>
        </nav>
        <div className="frame"></div>
        <main className="content" ref={ref}>
          <Frame className="page page-theme-light" data-active={page.active === 'first-page'} animate={page.active === 'first-page' ? animations.expandToContent : animations.expandToViewport} onAnimationComplete={page.active === 'first-page' ? null : updateBodyStyles}>
            {page.active === 'first-page' ? <PageContent triggerTransition={usePageTransition}/> : null}
          </Frame>
          <Frame className="page page-theme-dark" data-active={page.active === 'second-page'} initial={false} animate={page.active === 'second-page' ? animations.expandToContent : animations.expandToViewport} onAnimationComplete={page.active === 'second-page' ? null : updateBodyStyles}>
            {page.active === 'second-page' ? <PageContent triggerTransition={usePageTransition}/> : null}
          </Frame>
        </main>
      </div>
    </Router>
  );
}

export default App;
