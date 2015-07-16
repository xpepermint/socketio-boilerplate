import locations from './sockets/locations';
import requireAuthentication from './middlewares/requireAuthentication';

export default (io) => {
  io.of('/locations')
    .use(requireAuthentication)
    .on('connection', locations);
};
