var fs = require("fs")
var path = require("path")

dir_path = process.argv[2]
ext = process.argv[3]

fs.readdir(dir_path, function(error, list) {
	for (file of list) {
		if (path.extname(file) === "." + ext) {
			console.log(file)
		}
	}
})

