import React, { useState, useRef } from 'react';
import { Frame} from "framer"
import './App.scss';

// animations
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
    active: 'first-page'
  });

  const switchPage = () => {
    setPage({
      theme: page.theme === 'light' ? 'dark' : 'light',
      active: page.active === 'first-page' ? 'second-page' : 'first-page'
    })
  }

  const updateBodyStyles = () => {
    const viewportPage = window.getComputedStyle(ref.current.querySelector('[data-active="false"]'), null);
    document.body.style.backgroundColor = viewportPage.getPropertyValue('background-color');
  }

  // update animations object width and height
  if(ref.current) {
    animations.expandToContent.width = ref.current.offsetWidth;
    animations.expandToContent.height = ref.current.offsetHeight;
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li className="nav-separator"></li>
          <li><a href="#" onClick={switchPage}>ABOUT ME</a></li>
          <li className="nav-separator"></li>
          <li><a href="#" onClick={switchPage}>PROJECTS</a></li>
          <li className="nav-separator"></li>
          <li><a href="#" onClick={switchPage}>THOUGHTS</a></li>
          <li className="nav-separator"></li>
        </ul>
      </nav>
      <div className="frame"></div>
      <main className="content" ref={ref}>
        <Frame className="page page-theme-light" data-active={page.active === 'first-page'} animate={page.active === 'first-page' ? animations.expandToContent : animations.expandToViewport} onAnimationComplete={page.active === 'first-page' ? null : updateBodyStyles}></Frame>
        <Frame className="page page-theme-dark" data-active={page.active === 'second-page'} initial={false} animate={page.active === 'second-page' ? animations.expandToContent : animations.expandToViewport} onAnimationComplete={page.active === 'second-page' ? null : updateBodyStyles}></Frame>
      </main>
    </div>
  );
}

export default App;
