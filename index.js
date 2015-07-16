import redis from 'socket.io-redis';
import routes from './app/routes';
import config from './config';

export default (io) => {
  io.adapter(redis({host: config.redisHost, port: config.redisPort}));

  routes(io);
  return io;
};
