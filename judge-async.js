http = require("http")

var dataArray = new Array()
var cnt = 0
var urls = process.argv.slice(2, 5)
for (var i = 0; i < urls.length; i += 1) {
	http.get(urls[i], (function(index) {
		function f(response) {
			response.setEncoding("utf-8")
			var dataStr = ""
			response.on("data", function(data) {
				dataStr += data
			})
			var callback = function() {
				dataArray[index] = dataStr
				cnt += 1
				if (cnt === 3) {
                    for(data of dataArray){
                        console.log(data)
                    }
				}
			}
			response.on("end", callback)
			response.on("error", console.error)
		}
		return f
	})(i))
}

