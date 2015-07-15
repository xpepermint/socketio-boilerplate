import routes from './app/routes';

export default (io) => {
  routes(io);
  return io;
};
