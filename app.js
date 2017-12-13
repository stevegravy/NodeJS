var http = require('http');//création d'un serveur http
var url = require('url');
var querystring = require ('querystring');


var Server = http.createServer();
server.on('request', function(req, res){//Démmarer le serveur
    var urls = url.parse(req.url);
    var page = urls.pathname;
    var query = urls.query;
    var params = querystring.parse(query);
    console.log(params);
    res.writeHead(200, {"Content-Type" : "text/html"});
    if (page == '/') {
        res.write(query + '<br>' + params['papa']);
    }
    else if (page == '/hello') {
        res.write('Bonjour');
    }
    else if (page == '/hello/chambre') {
        res.write('Bienvenue dans ma chambre !');
    }
    else{
        res.write('Erreur 404');
    }
    res.end();
});

Server.listen(8080);
