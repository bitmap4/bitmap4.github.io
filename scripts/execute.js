var count = 1;
var terminal = document.getElementById('terminal');
var input = document.getElementById(`typed-${count}`);
var pwd = '/home';



if (input) terminal.addEventListener('click', function () {
    input.focus();
});

// input.style.width = `${terminal.offsetWidth - 170}px`;
// input.focus();

const parsePath = (path) => {
    path = path.replace(/\/\//g, '/').replace('~', '/home');
    var tokens = path.split('/');
    var result = pwd;
    if (tokens[0] === '') {
        result = '/';
        tokens = tokens.slice(1);
    }
    for (var token of tokens) {
        if (token === '.' || token === '') {
            continue;
        } else if (token === '..') {
            result = result.split('/').slice(0, -1).join('/');
        } else {
            result += `/${token}`;
        }
    }
    if (result[0] !== '/') result = `/${result}`;
    return result;
}

const builtin = async (command) => {
    var output = '';
    var tokens = command.split(' ');
    switch (tokens[0]) {
        case 'help':
            output = `To get detailed information about a command, type <span class="red">[command] --help</span><br>
            <span class="red">help</span>&nbsp;&nbsp;- list of commands<br>
            <span class="red">cat</span>&nbsp;&nbsp;&nbsp;- display content of a file<br>
            <span class="red">ls</span>&nbsp;&nbsp;&nbsp;&nbsp;- list files and directories<br>
            <span class="red">pwd</span>&nbsp;&nbsp;&nbsp;- print working directory<br>
            <span class="red">cd</span>&nbsp;&nbsp;&nbsp;&nbsp;- change directory [WIP]<br>
            <span class="red">clear</span>&nbsp;- clear the terminal`;
            break;
        case 'cat':
            if (tokens[1] === '--help') output = `cat: concatenate and display content of a file<br>
            Usage: cat [file]`
            else {
                // try to get content from files
                var files = tokens.slice(1);
                for (var file of files) {
                    output = await fetch(`${window.location.origin}${parsePath(file)}`)
                        .then(response => response.text())
                        .then(data => {
                            if (data.includes('File not found')) return `cat: ${file}: No such file or directory`;
                            return data;
                        })
                        .then(data => data.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>').replace(/\s/g, '&nbsp;'))
                        .catch(error => `cat: ${file}: No such file or directory <br> ${error}`);
                }
                if (tokens.length === 1) output = `cat: missing file operand`
            }
            break;
        case 'ls':
            if (tokens[1] === '--help') output = `ls: list files and directories<br>
            Usage: ls [directory]`
            else if (tokens.length > 2) output = `ls: too many arguments`
            else {
                var path = '';
                if (tokens.length === 2) path = parsePath(tokens[1]);
                else path = pwd;
                if (path === '/') return `ls: cannot access ${tokens[1]}: Permission denied <br>`;
                output = await fetch(`${window.location.origin}${path}`)
                    .then(response => response.text())
                    // find table in html recieved
                    .then(data => {
                        var parser = new DOMParser();
                        var doc = parser.parseFromString(data, 'text/html');
                        var table = doc.querySelector('table');
                        if (table) {
                            table.style.borderSpacing = '2em 0';
                            table.children[0].children[0].classList.add('red');
                            var text = table.outerHTML;
                            return text;
                        }
                        else return `ls: cannot access ${path}: No such directory <br>`;
                    })
            }
            break;
        case 'pwd':
            output = pwd;
            break;
        case 'clear':
            terminal.innerHTML = '';
            count = 1;
            output = '';
            break;
        case 'cd':
            output = 'WIP';
            break;
        default:
            if (command === '') output = '';
            else output = `${tokens[0]}: command not found`;
    }
    return output;
}

const execute = async () => {
    if (window.location.href.includes('blog')) window.location.href = '/index.html';
    input.disabled = true;
    command = input.value;
    var output = document.createElement('div');
    output.classList.toggle('output');
    output.id = `output-${count}`;
    output.innerHTML = await builtin(command);
    terminal.appendChild(output);
    count++;
    var newInput = document.createElement('div');
    newInput.classList.toggle('command');
    newInput.id = `command-${count}`;
    newInput.innerHTML = `<span class="user">abhyudit@IIIT</span>:<span class="pwd">${pwd.replace('/home', '~')}</span>$ <input id="typed-${count}"></input>`;
    terminal.appendChild(newInput);
    input = document.getElementById(`typed-${count}`);
    input.style.width = `${terminal.offsetWidth - 210}px`;
    input.focus();
}

window.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') { execute() }
});