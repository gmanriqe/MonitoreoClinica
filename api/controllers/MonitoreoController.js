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

	formAddMedico: function(req, res){
		var data = req.allParams();
		
		Medicos
			.create(data)
			.then( function(registro){
				console.log(registro);
				res.redirect('/medicos');
			})
			.catch( function(err){
				res.negotiate(err);
			})
	},

	


};

