const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    // eslint-disable-next-line no-undef
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*']
      },
    },
  });

  server.route(routes);
  try {
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
  } catch (err) {
    console.error('Failed to start server:', err);
    // eslint-disable-next-line no-undef
    process.exit(1); // Menghentikan proses jika terjadi error
  }
};

init();