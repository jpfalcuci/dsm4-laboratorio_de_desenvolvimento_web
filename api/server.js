const Hapi = require("@hapi/hapi");
const routes = require('./routes');

const server = Hapi.server({
  port: 5000,
  host: "localhost",
});

const plugins = [
  {
    plugin: routes,
    options: {
      routesBaseDir: "./api",
    }
  },
];

module.exports = { server, plugins };
