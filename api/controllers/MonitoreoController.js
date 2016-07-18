/**
 * MonitoreoController
 *
 * @description :: Server-side logic for managing monitoreos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	redirectMedicos: function(req, res){
		res.redirect('/medicos/1');
	},
	listMedicos: function(req, res){
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

	formAddMedico: function(req, res){
		var data = req.allParams();

		Medicos
			.create(data)
			.then( function( registro){
				res.redirect('/medicos');
			})
			.catch( function(err){
				res.send(err);
			});
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

	formDtyMedicos: function(req, res){
		var idMedico = req.params.id;

		Medicos
			.destroy(idMedico)
			.then( function(registro){
				res.redirect('/medicos');
			})
			.catch( function(err){
				res.send(err);
			});
	},




	redirectAmbulancias: function(req, res){
		res.redirect('/ambulancias/1/1');
	},

	listAmbulancia: function(req, res){
		var pag = req.params.pagina;
		var limit = req.params.tamano;
		var paginado = {
			pag:pag,
			limit:limit
		};
		Ambulancias
			.find()
			.sort({nNumero: 'ASC'})
			.paginate(paginado)
			.then( function( registro){
				var data = {
					regs:registro,
					pags:paginado
				};
				console.log(data);
				res.view('listAmbulancia', data);
			})
			.catch( function( err){
				res.send(err);
			});
	},

	addAmbulancia: function(req, res){
		res.view('formAddAmbulancia');
	},

	formAddAmbulancia: function(req, res){
		var datos = req.allParams();
		console.log(datos);
		Ambulancias
			.create(datos)
			.then( function(registro){
				console.log(registro);
				res.redirect('/ambulancias');
			})
			.catch( function(err){
				res.send(err);
			});
	},

	formEdtAmbulancia: function(req, res){
		var idAmbulancia = req.params.id;
		Ambulancias
			.find({idAmbulancia:idAmbulancia})
			.then( function( registro){
				var data = {
					regs:registro[0]
				};
				res.view('formEdtAmbulancia',data);
			})
			.catch( function( err){
				res.send(err);
			});
	},

	formUdpAmbulancia: function(req, res){
		var idAmbulancia = req.params.id;
		var nNumero = req.body.nNumero;
		var monitoreo = req.body.monitoreo;

		var filtro = {
			idAmbulancia:idAmbulancia
		};
		var datos = {
			nNumero:nNumero,
			monitoreo:monitoreo
		};
		Ambulancias
			.update(filtro,datos)
			.then( function( registro){
				// res.send(registro);
				res.redirect('/ambulancias');
			})
			.catch( function( err){
				res.send(err);
			});
	},

	formDtyAmbulancia: function(req, res){
		var idAmbulancia = req.params.id;

		Ambulancias
			.destroy(idAmbulancia)
			.then( function(registro){
				res.redirect('/ambulancias');
			})
			.catch( function(err){
				res.send(err);
			});
	},




	redirectParamedicos: function(req, res){
		res.redirect('/paramedicos/1');
	},
	listParamedicos: function(req, res){
		var pagina = req.params.pag;
		Paramedicos
			.count()
			.then( function( cantidadRegistros){
				cantidadPaginas= Math.ceil(cantidadRegistros/3);
				Paramedicos
					.find()
					.paginate({page:pagina, limit:3})
					.then( function( registro){
						var data = {
							regs:registro,
							pag:pagina,
							cantPag:cantidadPaginas
						};
						res.view('listParamedicos',data);
					})
					.catch( function(err){
						res.negotiate(err);
					});


			})
			.catch( function(err){
				res.send(err);
			});
	},
	addParamedicos: function(req, res){
		res.view('formAddParamedico');
	},
	formAddParamedico: function(req, res){
		var dato = req.allParams();
		console.log(dato);
		Paramedicos
			.create(dato)
			.then( function(registro){
				res.redirect('/paramedicos');
			})
			.catch( function(err){
				res.send(err);
			});
	},
	formEdtParamedicos: function(req, res){
		var idParamedico = req.params.id;
		var filtro = {
			idParamedico:idParamedico
		};
		Paramedicos
			.find(filtro)
			.then( function(registro){
				var data = {
					regs:registro[0]
				};
				console.log('--Edit--');
				console.log(data);
				res.view('formEdtParamedico',data);
			});
	},
	formUpdParamedico: function(req, res){
		var idParamedico = req.params.id;
		var cNombre = req.body.cNombre;
		var monitoreo = req.body.monitoreo;
		var filtro = {
			idParamedico:idParamedico
		};
		var dato = {
			cNombre:cNombre,
			monitoreo:monitoreo
		};
		Paramedicos
			.update(filtro, dato)
			.then( function(registro){
				res.redirect('/paramedicos');
			})
			.catch( function(err){
				res.negotiate(err);
			});
	},
	formDtyParamedicos: function(req, res){
		var idParamedico = req.params.id;
		Paramedicos
			.destroy(idParamedico)
			.then( function( registro){
				res.redirect('/paramedicos');
			})
			.catch( function( err){
				res.send( err);
			});
	},




};
