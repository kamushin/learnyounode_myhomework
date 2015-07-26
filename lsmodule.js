var fs = require("fs")
var path = require("path")

module.exports = function ls_filte_ext(dir_path, ext, callback) {
    fs.readdir(dir_path, function(error, list) {
        if(error) {
            return callback(error);
        }
        list = list.filter(function (file) {
           return path.extname(file) === "." + ext    
        })
        callback(null, list)
    })
}

