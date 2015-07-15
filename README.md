# Features

* [Socket.io](http://socket.io)

* Cluster mode using [Redis](http://redis.io)

* ES6 syntax

# Setup

Follow these steps to start developing your next Socket.io app.

* Download this project source `git clone https://github.com/xpepermint/socketio-boilerplate`.

* Run `npm install` to install dependencies.

* Run `npm run server` to start HTTP server.

* Open `./examples/client.html` file with your browser and check the logs.

# Wiki

## Send message from API server to all connected clients

If you need to broadcast an event from a different process which has nothing to do with this socket.io server then you must use [socket.io-emitter](https://github.com/automattic/socket.io-emitter). The message will be published directly to Redis instance and the socket server will grab it from there and send it to all connected clients.

```js
var io = require('socket.io-emitter')({host: 'localhost', port: 6379});
io.of('/locations').emit('fromApi', 'Message from API server.');
```
