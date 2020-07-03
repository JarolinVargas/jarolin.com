import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ReactGA from 'react-ga';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-129130175-5');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* cursor
const cursorEl = document.querySelector('#cursor');
window.addEventListener('mousemove', function(event) {
  cursorEl.style.left = `${event.clientX}px`;
  cursorEl.style.top = `${event.clientY}px`;
});

function updateClickables() {
  const clickables = document.querySelectorAll('a:not(.cursor-clickable)');
  for( let i = 0; i < clickables.length; i++ ) {
    clickables[i].classList.add('.cursor-clickable');
    clickables[i].addEventListener('mouseenter', () => {
      cursorEl.classList.add('clickable-style');
    });
    clickables[i].addEventListener('mouseleave', () => {
      cursorEl.classList.remove('clickable-style');
    });
  }
}
updateClickables();*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
