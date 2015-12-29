var Timer = require('../models/timer');

Timer.remove(function () {
});

var timer = new Timer();
timer.name = 'Importador Débito Cielo';
timer.status = 'SUCCESS';
timer.repeatStatus = 189;
timer.url = 'http://socc.confidencecambio.com/timers/importador_cielo';
timer.run_id = 2;
timer.save();

var timer1 = new Timer();
timer1.name = 'Prorrogador de Ordem de Pagamento Cancelada ou Erro Bacen';
timer1.status = 'ERROR';
timer1.repeatStatus = 52;
timer1.url = 'http://socc.confidencecambio.com/timers/prorrogador_op';
timer1.run_id = 2;
timer1.save();

var timer2 = new Timer();
timer2.name = 'Cancelador de Propostas Expiradas';
timer2.status = 'RUNNING';
timer2.repeatStatus = 1;
timer2.url = 'http://socc.confidencecambio.com/timers/cancelador_propostas';
timer2.run_id = 2;
timer2.save();

var timer2 = new Timer();
timer2.name = 'Consolidador de extratos';
timer2.status = 'RUNNING';
timer2.repeatStatus = 1;
timer2.url = 'http://socc.confidencecambio.com/timers/consolidador';
timer2.run_id = 1;
timer2.save();