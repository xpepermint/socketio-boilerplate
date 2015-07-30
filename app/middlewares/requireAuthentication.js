export default (socket, next) => {
  console.log(socket.request._cookie)
  console.log(socket.request._cookies)
  let accessToken = socket.request._query.accessToken || socket.request.cookies.accessToken;
  if (accessToken) { // validate token
    next();
  } else {
    next(new Error('Authentication failed.'));
  }
};
