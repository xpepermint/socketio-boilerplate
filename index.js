import redis from 'socket.io-redis';
import routes from './app/routes';

export default (io) => {
  io.adapter(redis({host: 'localhost', port: 6379}));

  routes(io);
  return io;
};
