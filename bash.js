const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('promt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(' ')
     if (cmd[0] === 'pwd') {
        pwd()
    }
    if (cmd[0] === 'ls') {
        ls()
    }

    if (cmd[0] === 'cat') {
        cat(cmd.slice(1))
    }
})