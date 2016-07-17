/**
 * MonitoreoController
 *
 * @description :: Server-side logic for managing monitoreos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	redireccionarMedicos: function(req, res){
		res.redirect('/medicos/1');
	},
	listarMedicos: function(req, res){
		var pagina = req.params.pag;
		Medicos
			.count()
			.then( function( cantidadRegistros){
				var cantidadPaginas= Math.ceil(cantidadRegistros/3);
				Medicos
					.find()
					.sort('cNombre Asc')
					.paginate({page:pagina, limit:3})
					.then( function( registro){
						var data = {
							regs:registro,
							pag:pagina,
							cantPag:cantidadPaginas
						};
						console.log(data);
						res.view('listMedico',data);
					})
					.catch( function(err){
						res.negotiate(err);
					});

			})
			.catch( function(err){
				res.send(err);
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
				res.redirect('/medicos');
			})
			.catch( function( err){
				res.send(err);
			});
	},

	formDltMedicos: function(req, res){
		var idMedico = req.params.id;

		Medicos
			.destroy(idMedico)
			.then( function(registro){
				res.redirect('/medicos');
			})
			.catch( function(err){
				res.send(err);
			});
	}



};
