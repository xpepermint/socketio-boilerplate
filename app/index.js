import redis from 'socket.io-redis';
import cookies from 'socket.io-cookie-parser';
import routes from './routes';
import config from '../config';

export default (io) => {
  io.adapter(redis({host: config.redisHost, port: config.redisPort}));
  io.use(cookies(config.appSecret));

  routes(io);
  return io;
};
