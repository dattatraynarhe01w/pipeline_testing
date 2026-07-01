// Content-Security-Policy middleware
const helmet = require("helmet");

function applySecurityHeaders(app) {
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        objectSrc: ["'none'"],
      },
    })
  );
}
// Sets the Content-Security-Policy response header on every request.

module.exports = { applySecurityHeaders };
