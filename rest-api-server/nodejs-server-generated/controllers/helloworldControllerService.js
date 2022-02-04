'use strict'

module.exports.helloworld = function helloworld(req, res, next) {
  console.log(req);
  res.send({
    message: 'hello World ' + req.data.value.name
  });
};