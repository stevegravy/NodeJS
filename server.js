
var http = require("http");
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
 <!DOCTYPE html>
 <html lang="en">
  <head>
   <meta charset="UTF-8">
   <title>hello node</title>
  </head>
  <body>
   <p>Hello world</p>
  </body>
 </html>
 `);
response.end();
});
server.listen(8080);



var events = require('events');
var eventEmitter = new events.EventEmitter();
// Creation de l'évenement
var myEvent = function() {
    console.log('Vive le terminal');
}
// Application de l'événement à un cas
eventEmitter.on('terminal', myEvent);
// Lance l'évenement "aimeTerminal"
eventEmitter.emit('terminal');

