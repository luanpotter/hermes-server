var Notification = require('../models/notification');

Notification.remove(function () {
});

var notification = new Notification();
notification.title = 'Erro na proposta de boleto';
notification.save();

var notification2 = new Notification();
notification2.title = 'Erro na proposta de tranferencia';
notification2.save();	

var notification3 = new Notification();
notification3.title = 'PTAX BOT FAIL';
notification3.save();

var notification4 = new Notification();
notification4.title = 'Scripts de verificação';
notification4.save();