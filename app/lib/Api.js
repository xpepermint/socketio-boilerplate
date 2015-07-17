import axios from 'axios';
import config from '../../config';

let methods = {};
Object.keys(axios).forEach((name) => {
  methods[name] = function() {
    let args = Array.prototype.slice.call(arguments);
    args[0] = `${config.apiBaseUrl}${args[0]}`;
    return axios[name].apply(axios, args);
  };
});

export default methods;
