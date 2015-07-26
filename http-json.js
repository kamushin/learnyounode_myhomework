var http = require("http")
var url = require("url")
var server = http.createServer(function(req, res) {
	urldict = url.parse(req.url, true)
	res.writeHead(200, {
		'Content-Type': 'application/json'
	})
	if (urldict.pathname === '/api/parsetime') {
		iso = urldict.query.iso
		var date = new Date(iso)
		res.end(JSON.stringify({
			'hour': date.getHours()
			,'minute': date.getMinutes()
			,'second': date.getSeconds()
		}))
	}
	else if (urldict.pathname === '/api/unixtime') {
		iso = urldict.query.iso
		res.end(JSON.stringify({
			'unixtime': new Date(iso).getTime()
		}))
	}
	else {
		console.error(req.url)
	}
})

server.listen(process.argv[2])
