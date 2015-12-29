var Service = require('../models/service');

Service.remove(function () {
});

var service = new Service();
service.name = 'Sinatra - HTML to PDF';
service.status = 'ON';
service.server = '10.90.0.71';
service.run_id = 2;
service.save();

var service1 = new Service();
service1.name = 'NFS - mount digitalização';
service1.status = 'OFF';
service1.server = '10.90.0.79';
service1.run_id = 2;
service1.save();

var service2 = new Service();
service2.name = 'New Relic';
service2.status = 'OFF';
service2.server = '10.0.0.60';
service2.run_id = 2;
service2.save();

var service3 = new Service();
service3.name = 'New Relic';
service3.status = 'ON';
service3.server = '10.0.0.60';
service3.run_id = 1;
service3.save();