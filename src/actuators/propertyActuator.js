import axios from 'axios';

export default {
  getUpdatedValue(property) {
    return axios.get(`http://led.local${property.href}`);
  },
  setValue(property, value) {
    const jsonRequest = {};
    jsonRequest[property.key] = value;
    return axios.put(`http://led.local${property.href}`, jsonRequest);
  },
};
