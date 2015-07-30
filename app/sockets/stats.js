import axios from 'axios';
import config from '../../config';

export default (socket) => {
  setInterval(() => {
    axios.get(`${config.apiBaseUrl}/stats`).then(res => {
      socket.emit('initialize', res.data);
    }).catch(console.log);
  }, 1000);

  socket.on('fromClient', function(payload) {
    console.log(payload);
  });
};
