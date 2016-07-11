/**
* Estados.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	idEstado: {
  		primaryKey: true,
  		autoIncrement: true,
  		unique: true,
  		type: 'integer'
  	},
  	cEstado: {
  		type: 'string',
  		required: true,
  	},
  	nActivo: {
  		type: 'integer',
  		defaultsTo: 0
  	},
  	monitoreo: {
  		collection: 'Monitoreo',
  		via: 'estado'
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

