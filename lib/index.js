'use strict';

// call function to allow for future options as advised by koa best-practices
module.exports = () =>
  (ctx, next) => {
    ctx.decodedQuerystring = decodeURIComponent(ctx.querystring);
    return next();
  };
