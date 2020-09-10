var http = require('http')

var requestListener = function(req, res){
    if (req.url =='/register'){

        res.writeHead(200)
        res.end("<h1> Hello I am registering for PEGA")
    }
    else
        if(req.url=='/learning'){
            res.writeHead(200)
            res.end("<h1> Welcome to LMS")
        }
    else{
        res.writeHead(200)
        res.end("<h1> Welcome to PEGA")
    }
}

var server = http.createServer(requestListener)
server.listen("3000")