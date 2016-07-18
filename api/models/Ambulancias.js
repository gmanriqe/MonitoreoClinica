/**
* Ambulancias.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	idAmbulancia: {
  		primaryKey: true,
  		autoincrement: true,
  		unique: true,
  		type: 'integer'
  	},
  	nNumero: {
  		type: 'integer',
  		required: true
  	},
  	nActivo : {
            type: 'integer',
  		defaultsTo: 0
  	},
  	monitoreo: {
  		model: 'Monitoreo'
  	},
  	createdAt: {
            type: 'datetime',
            columnName: 'cre_dt'
      },
      updatedAt: {
            type: 'datetime',
            columnName: 'upd_dt'
      },
  }
};
