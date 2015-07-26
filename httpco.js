http = require("http")
http.get(process.argv[2], function(response) {
	response.setEncoding("utf-8")
	var dataList = ""
	response.on("data", function(data) {
		dataList += data
	})
	response.on("end", function() {
		console.log(dataList.length)
		console.log(dataList)
	})
	response.on("error", console.error)
})

