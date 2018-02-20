//Application côté serveur en NodeJS
var app = require('express')(),//On appelle les modules 'express', 'socket.io', 'ent' et 'fs'
    server = require('http').createServer(app),//Permet de communiquer avec le navigateur via le protocole http
    io = require('socket.io').listen(server),//Permet un échange asynchrone entre le client et le serveur. Permet de ne pas recharger la page.
    ent = require('ent'), // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
    fs = require('fs');

// Chargement de la page index.html
app.get('/', function (req, res) {//Gestion de l'index '/'
    res.sendfile(__dirname + '/index.html');//renvoi de la page index.html
});

io.sockets.on('connection', function (socket, pseudo) {
    // Dès qu'on nous donne un pseudo, on le stocke en variable de session et on informe les autres personnes
    socket.on('nouveau_client', function(pseudo) {//message envoyé par un nouveau client qui vient de charger la page
        pseudo = ent.encode(pseudo);//On l'encode avec 'ent.encode' par sécurité
        socket.pseudo = pseudo;
        socket.broadcast.emit('nouveau_client', pseudo);
    });

    // Dès qu'on reçoit un message, on récupère le pseudo de son auteur et on le transmet aux autres personnes
    socket.on('message', function (message) {
        message = ent.encode(message);
        socket.broadcast.emit('message', {pseudo: socket.pseudo, message: message});
    });
});

server.listen(63342)//serveur lié au port 63342

