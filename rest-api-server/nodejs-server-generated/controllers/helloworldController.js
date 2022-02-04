'use strict'

var varhelloworldController = require('./helloworldControllerService');

module.exports.helloworld = function helloworld(req, res, next) {
  varhelloworldController.helloworld(req.swagger.params, res, next);
};