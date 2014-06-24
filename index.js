'use strict';

var bodyParser = require('body-parser');

function EmberCLIBodyParser(project) {
  this.project = project;
  this.name    = 'Ember CLI express-bodyparser';
}


EmberCLIBodyParser.prototype.serverMiddleware = function serverMiddleware(options) {
  var app   = options.app,
      proxy = options.options.proxy;

  // body-parser + proxy-middleware = bad (https://github.com/nodejitsu/node-http-proxy/issues/180)
  if (proxy) { return; }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
};

EmberCLIBodyParser.prototype.included = function included(app) { return; };

EmberCLIBodyParser.prototype.treeFor = function treeFor(name) { return; };

module.exports = EmberCLIBodyParser;
