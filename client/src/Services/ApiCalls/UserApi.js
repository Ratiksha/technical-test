const axios = require('axios');

class UserApi {
  // get users list
  static async getUsersList(data = '') {
    if (data) {
      // perform search
      return await axios.get('http://localhost/api/personnel', {
        params: {Reference: data}
      });
    } else {
      return await axios.get('http://localhost/api/personnel');
    }
  }


}

export default UserApi;
