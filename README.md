# Koa Decoded Querystring

## To use
```js
const koaDecodedQuerystring = require('koa-decoded-querystring');
// ...
app.use(koaDecodedQuerystring());
```

## Very Simple
This module is 5 lines long

```js
// call function to allow for future options as advised by koa best-practices
module.exports = () =>
  (ctx, next) => {
    ctx.decodedQuerystring = decodeURIComponent(ctx.querystring);
    return next();
  };
```

So when ctx.querystring contains "%20", decodedQuerystring will contain a
space instead

I only created this module to isolate the testing and any further additions.
