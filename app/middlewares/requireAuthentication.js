export default (socket, next) => {
  let accessToken = socket.request._query.accessToken;
  if (accessToken) { // validate token
    next();
  } else {
    next(new Error('Authentication failed.'));
  }
};
