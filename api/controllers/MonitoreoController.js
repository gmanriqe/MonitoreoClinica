/**
 * MonitoreoController
 *
 * @description :: Server-side logic for managing monitoreos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	listarMedicos: function(req, res){
		Medicos
			.find({nActivo: 0})
			.sort({cNombre: 'ASC'})
			.then( function(registroMedicos){
					res.view('listMedico', {
						regs: registroMedicos
					});
			})
			.catch( function(err){
				res.negotiate(err);
			});
	},

	addMedico: function(req, res){
		res.view('formAddMedico');
	},

	formEdtMedico: function(req, res){
		var idMedico = req.params.id;
		var filtro = {
			idMedico:idMedico
		};
		Medicos
			.find()
			.where(filtro)
			.then( function(registro){
				console.log(registro[0]);
				var data = {
					regs:registro[0]
				};
				res.view('formEdtMedico',data);
			})
			.catch( function(err){
				res.send(err);
			});
	},

	formUpdMedico: function(req, res){
		var idMedico = req.params.id;
		var cNombre = req.body.cNombre;
		var monitoreo = req.body.monitoreo;
		var filtro = {
			idMedico:idMedico
		};
		var dato = {
			cNombre:cNombre,
			monitoreo:monitoreo
		};

		Medicos
			.update(filtro, dato)
			.then( function( registro){
				console.log(registro);
				res.redirect('/medicos');
			})
			.catch( function( err){
				res.send(err);
			});
	}



};
