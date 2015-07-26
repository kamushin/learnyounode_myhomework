ls = require("./lsmodule.js")
ls(process.argv[2], process.argv[3], function (err, list) {
    if (err){
        return console.log("something error" + err)
    }
    list.forEach(function (file) {
        console.log(file)
    })
})
