const fs = require('fs');

fs.readFile('info.txt', "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});


// fs.writeFile  ☑
// fs.appendFile ☑
// fs.copyFile ☑
// fs.rename ☑
// fs.unlink ☑
// fs.rmdir ☑
// fs.readFile ☑