'use strict';


//---------//
// Imports //
//---------//

const bPromise = require('bluebird')
  , Koa = require('koa')
  , decodedQuerystring = require('../../lib')
  ;


//------//
// Init //
//------//

const PORT = 8085;
let server;


//------//
// Main //
//------//

const startServer = useLib => {
  const app = new Koa();

  if (useLib) app.use(decodedQuerystring());

  app.use(
    (ctx, next) => {
      ctx.body = ctx.decodedQuerystring || ctx.querystring;
      return next();
    }
  );

  return bPromise.fromCallback(cb => server = app.listen(PORT, cb));
};

const stopServer = () => bPromise.fromCallback(cb => server.close(cb));

const restartServer = useLib => {
  stopServer();
  startServer(useLib);
};


//---------//
// Exports //
//---------//

module.exports = {
  restartServer: restartServer
  , startServer: startServer
  , stopServer: stopServer
};
