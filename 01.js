const fs = require('fs')

function readDir (path = '/') {
    return new Promise ((resolve, reject) => {
        fs.readdir(path, (err, result) => {
            err? reject(err) : resolve(result);
          })
    })
}

readDir('/ home').then(data => {
    console.log(data);
}).catch(err => {
    console.log("Ini errornya : ", err)
})