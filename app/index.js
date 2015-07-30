import redis from 'socket.io-redis';
import cookies from 'socket.io-cookie';
import routes from './routes';
import config from '../config';

export default (io) => {
  io.use(cookies);
  io.adapter(redis({host: config.redisHost, port: config.redisPort}));

  routes(io);
  return io;
};
