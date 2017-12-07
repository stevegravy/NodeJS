
var http = require("http");//On veut communiquer avec le navig via le protocole http
var server = http.createServer(function(request, response) {//Fonction pour créer le serveur
    response.writeHead(200, {"Content-Type": "text/html"});//Si requete traitée avec succès (200), on retournera
    //Ce document en html:
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
response.end();//Fin de notre réponse
});
server.listen(8080);//lie notre erveur au port 8080

//Les événements:
var fs = require("fs");//On importe le module fs
var rs = fs.createReadStream('./fichier'); //On appelle la méthode createReadStream() de fs,qu'on stovke dans la vatriable rs
rs.on('open', function(){ //On exécute on sur l'objet rs avec en permier paramètre "open" pour exécuter un script: une fonction
    console.log('Lefichier est maintenant ouvert!!!')// console.log s'exécute (sur rs) lorsuque le fichier sera ouvert
});




var events = require('events');//importation du module dans le script
var eventEmitter = new events.EventEmitter();//création de l'objet eventEmitter qui perlmettra de faire fonctionner les événements
// Creation de l'évenement
var myEvent = function() {//création d'une fonction qu'on voudra déclencher sur l'événement
    console.log('Vive le terminal');
}
// Application de l'événement à un cas
eventEmitter.on('terminal', myEvent);//on lance la foncton myEvent lorsque l'objet eventEmitter reçoit le signal 'terminal'. En 2eme param de on, on lance la fonction myEvent
// Lance l'évenement "aimeTerminal"
eventEmitter.emit('terminal');//Ce n\'est que si le emit('terminal') de la ligne 10 s'exécute que le on() de la 8 ne se lance

