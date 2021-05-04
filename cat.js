const fs = require('fs');

module.exports = function(files) {
    files.forEach(file => {
        fs.readFile(file, (err, data) => {
            if (err) throw err;
            console.log(data.toString().trim())
        })
    });
    process.stdout.write('\nprompt > ');
    // console.log('\nprompt > ')
 };