/**
* Monitoreo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	idMonitoreo: {
  		primaryKey: true,
  		autoIncrement: true,
  		unique: true,
  		type: 'integer'
  	},
  	ambulancia: {
  		model: 'Ambulancias'
  	},
  	estado: {
		model: 'Estados'  		
  	},
  	medico: {
		model: 'Medicos'
  	},
  	paramedico: {
		model: 'Paramedicos'
  	},
  	createdAt: {
  		type: 'datetime',
  		columnName: 'cre_dt'
  	},
  	updatedAt: {
  		type: 'datetime',
  		columnName: 'upd_dt'
  	}
  }
};

