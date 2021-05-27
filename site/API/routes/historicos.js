var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;
var Historico = require('../models').Historico;

let sessoes = [];


/* Inserir dados */
router.post('/inserir', function(req, res, next) {
	console.log('Inserindo um dado no banco');
	
	Historico.create({
		fk_usuario : req.body.id,
		fk_cubo : req.body.cubo,
		tempo : req.body.tempo,
		sorteio : req.body.sorteio,
		fk_cubo : req.body.cubo
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});


module.exports = router;
