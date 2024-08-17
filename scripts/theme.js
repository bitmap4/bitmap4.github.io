var themeToggle = document.getElementById('theme-toggle');
var current = document.getElementById('current');
// var pages = document.getElementById('pages');

const toggle = () => {
    if(current.innerHTML === '🌙'){
        current.innerHTML = '☀️';
        themeToggle.style.justifyContent = 'flex-end';
        // modify root variables
        document.documentElement.style.setProperty('--accent', '#B8C0E0');
        document.documentElement.style.setProperty('--text', '#20111B');
        document.documentElement.style.setProperty('--accent-text', '#3A94C5');
    } else {
        current.innerHTML = '🌙';
        themeToggle.style.justifyContent = 'flex-start';
        // modify root variables
        document.documentElement.style.setProperty('--accent', '#282a36');
        document.documentElement.style.setProperty('--text', '#f8f8f2');
        document.documentElement.style.setProperty('--accent-text', '#8BE9FD');
    }
}
themeToggle.addEventListener('click', toggle);