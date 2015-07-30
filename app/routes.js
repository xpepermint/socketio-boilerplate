import stats from './sockets/stats';
import requireAuthentication from './middlewares/requireAuthentication';

export default (io) => {
  io.of('/stats')
    //.use(requireAuthentication)
    .on('connection', stats);
};
