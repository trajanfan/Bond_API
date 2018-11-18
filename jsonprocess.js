const fs = require('fs');


module.exports = {
    readfile: (path) => {
        fs.readFile(path, (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    },

    writefile: (path, data) => {
        fs.writeFile(path, data, 'utf8', (err) => {
            if (err) throw err;
        });
    },
    }