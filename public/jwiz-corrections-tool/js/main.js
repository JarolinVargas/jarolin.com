// activate navigation corresponding tab
var currentURL = window.location.pathname;
var currentPage = currentURL.split('/').pop();
if( !currentPage ) { currentPage = 'index.php' };
var activateLink = document.querySelectorAll('nav a[href="'+ currentPage +'"]')[0];
if( activateLink ) { activateLink.classList.add('nav-active-tab'); }
