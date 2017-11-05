const nconf = require('nconf');
const environment = process.env.NODE_ENV || 'development'; // default to development

function Config() {
  nconf.file(environment, './config/' + environment.toLowerCase() + '.json');
  nconf.file('default', './config/default.json');
}

Config.prototype.get = function(key) {
  return nconf.get(key);
};

module.exports = new Config();
