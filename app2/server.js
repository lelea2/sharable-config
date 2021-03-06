'use strict';

const Hapi = require('hapi');
const config = require('custom-config-test');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8001
});

// Add the route
server.route({
  method: 'GET',
  path:'/hello',
  handler: function (request, reply) {
    return reply('hello world2');
  }
});

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
