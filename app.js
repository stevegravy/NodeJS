var http = require('http');//création d'un serveur http

httpServer = http.createServer(function(req, res){//Démmarer le serveur
    res.end('Hello world!');
});

httpServer.listen(8080);

var io = require('socket.io').listen(httpServer);
