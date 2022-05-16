"use strict";

var requestIp = require('request-ip'); // inside middleware handler


var ipMiddleware = function ipMiddleware(req, res, next) {
  var clientIp = requestIp.getClientIp(req);
  next();
  debugger;
  console.log(clientIp);
};