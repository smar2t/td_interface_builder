import Axios from 'axios';

export default {
  getValue(property) {

  },
  setValue(property, v) {
    return Axios
      .post(property.links[0]);
  },
};
