
var header = document.getElementById('header');
var pfp = document.getElementById('pfp');
var navbar = document.getElementById('navbar');
var Name = document.getElementById('name');
var themeConnections = document.getElementById('theme-connections');
// var pages = document.getElementById('pages');



const transformHeader = () => {
    if(header.getBoundingClientRect().top <= 20 || 'blog' in window.URL) {
        header.style.width = '100vw';
        // delete pfp
        if (header.children[0] === pfp) {
            header.removeChild(pfp);
            navbar.removeChild(themeConnections);
        }
        // insert pfp in #navbar at the beginning if img not in navbar
        if (navbar.children[0] !== pfp) {
            navbar.insertBefore(pfp, navbar.children[0]);
            header.insertAdjacentElement('beforeend', themeConnections);
            themeConnections.style.justifyContent = 'flex-end';
            header.style.paddingRight = '20px';
        }
        navbar.style.display = 'flex';
        navbar.style.flexDirection = 'row';
        Name.style.fontSize = '18px';
        header.style.backgroundColor = 'var(--accent)';
        header.style.borderBottom = '1px solid var(--accent-text)';
        header.style.position = 'fixed';
        header.style.top = `0`;
        header.style.paddingTop = `20px`;
        if (terminal) terminal.style.paddingTop = `${header.offsetHeight}px`
        // pages.style.display = 'flex';
        if (header.classList[0] == 'not-navbar') {
            header.classList.toggle('not-navbar');
            header.classList.toggle('navbar');
        }
    }
}
// detect when the header is at the top, but it may get to the top without scrolling
const observer = setInterval(transformHeader, 100);
// stop the observer when the page is close
window.addEventListener('beforeunload', function(){
    clearInterval(observer);
});