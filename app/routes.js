import locations from './sockets/locations';

export default (io) => {
  io.of('/locations').on('connection', locations);
};
