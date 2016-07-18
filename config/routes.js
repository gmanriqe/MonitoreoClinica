/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

      '/': {
            view: 'homepage',
      },

      'GET /medicos': {
            controller: 'MonitoreoController',
            action: 'redirectMedicos'
      },

      'GET /medicos/:pag': {
            controller: 'MonitoreoController',
            action: 'listMedicos'
      },

      'GET /addMedico': {
            controller: 'MonitoreoController',
            action: 'addMedico'
      },

      'POST /formAddMedico': {
            controller: 'MonitoreoController',
            action: 'formAddMedico'
      },

      'GET /formEdtMedicos/:id': {
            controller: 'MonitoreoController',
            action: 'formEdtMedico'
      },

      'POST /formUpdMedico/:id': {
            controller: 'MonitoreoController',
            action: 'formUpdMedico'
      },

      'GET /formDtyMedicos/:id': {
            controller: 'MonitoreoController',
            action: 'formDtyMedicos'
      },




      'GET /ambulancias': {
            controller: 'MonitoreoController',
            action: 'redirectAmbulancias'
      },
      'GET /ambulancias/:pagina/:tamano':{
            controller: 'MonitoreoController',
            action: 'listAmbulancia'
      },
      'GET /addAmbulancia': {
            controller: 'MonitoreoController',
            action: 'addAmbulancia'
      },
      'POST /formAddAmbulancia': {
            controller: 'MonitoreoController',
            action: 'formAddAmbulancia'
      },
      'GET /formEdtAmbulancia/:id': {
            controller: 'MonitoreoController',
            action: 'formEdtAmbulancia'
      },
      'POST /formUdpAmbulancia/:id': {
            controller: 'MonitoreoController',
            action: 'formUdpAmbulancia'
      },
      'GET /formDtyAmbulancia/:id': {
            controller: 'MonitoreoController',
            action: 'formDtyAmbulancia'
      },



      'GET /paramedicos':{
            controller: 'MonitoreoController',
            action: 'redirectParamedicos'
      },
      'GET /paramedicos/:pag': {
            controller: 'MonitoreoController',
            action: 'listParamedicos'
      },
      'GET /addParamedicos': {
            controller: 'MonitoreoController',
            action: 'addParamedicos'
      },
      'POST /formAddParamedico': {
            controller: 'MonitoreoController',
            action: 'formAddParamedico'
      },
      'GET /formEdtParamedicos/:id': {
            controller: 'MonitoreoController',
            action: 'formEdtParamedicos'
      },
      'POST /formUpdParamedico/:id': {
            controller: 'MonitoreoController',
            action: 'formUpdParamedico'
      },
      'GET /formDtyParamedicos/:id': {
            controller: 'MonitoreoController',
            action: 'formDtyParamedicos'
      },



      'GET /estados': {
            controller: 'MonitoreoController',
            action: 'listEstados'
      },
      'GET /addEstados': {
            controller: 'MonitoreoController',
            action: 'addEstados'
      },
      'POST /formAddEstado': {
            controller: 'MonitoreoController',
            action: 'formAddEstado'
      },
      'GET /formEdtEstados/:id': {
            controller: 'MonitoreoController',
            action: 'formEdtEstados'
      },
      'POST /formUpdEstados/:id': {
            controller: 'MonitoreoController',
            action: 'formUpdEstados'
      },
      'GET /formDtyEstados/:id' : {
            controller: 'MonitoreoController',
            action: 'formDtyEstados'
      }




  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
