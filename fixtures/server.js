var Server = require('../models/server');

Server.remove(function () {
});

var server = new Server();
server.label = 'APACHE';
server.ip = '10.0.0.60';
server.status = 'SUCCESS';
server.version = 'b70e2a0d855b4dc7b1ea34a8a9d10305';
server.run_id = 2;
server.save();

var server1 = new Server();
server1.label = 'CORRETORA 71';
server1.ip = '10.90.0.71';
server1.status = 'SUCCESS';
server1.version = '9a2df29a402aec855313eea7ede842f0';
server1.run_id = 2;
server1.save();

var server2 = new Server();
server2.label = 'CORRETORA 79';
server2.ip = '10.90.0.79';
server2.status = 'ERROR';
server2.run_id = 2;
server2.save();

var server3 = new Server();
server3.label = 'BANCO 66';
server3.ip = '10.90.0.66';
server3.status = 'ERROR';
server3.run_id = 2;
server3.save();

var server4 = new Server();
server4.label = 'BANCO 80';
server4.ip = '10.90.0.80';
server4.status = 'SUCCESS';
server4.version = 'b70e2a0d855b4dc7b1ea34a8a9d10305';
server4.run_id = 2;
server4.save();

var server5 = new Server();
server5.label = 'API';
server5.ip = '10.0.0.75';
server5.status = 'SUCCESS';
server5.version = 'b70e2a0d855b4dc7b1ea34a8a9d10305';
server5.run_id = 1;
server5.save();
