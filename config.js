export default {
  env: process.env.NODE_ENV || 'development',
  socketServerHost: process.env.SOCKET_SERVER_HOST || '127.0.0.1',
  socketServerPort: process.env.SOCKET_SERVER_PORT || 5555,
  redisHost: process.env.REDIS_HOST || '127.0.0.1',
  redisPort: process.env.REDIS_PORT || 6379,
  apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3333',
};
