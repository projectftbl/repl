var repl = require('repl');

var environment = process.env.NODE_ENV || 'development';

module.exports = function(name, app, api) {
  app.start().then(function() {
    var replServer = repl.start({
      prompt: '$ ' + name + ' (' + environment + ') > '
    });

    replServer.context.app = app;
    replServer.context.api = api;
  });
};

