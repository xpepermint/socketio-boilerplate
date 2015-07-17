import Api from '../lib/Api';

export default (socket) => {
  setInterval(() => {
    Api.get('/locations').then((res) => {
      let locations = res.data.map((location) => {
        location.updatedAt = Date.now();
        return location;
      });
      socket.emit('initialize', locations);
    }).catch(console.log);
  }, 1000);

  socket.on('fromClient', function(payload) {
    console.log(payload);
  });
};
