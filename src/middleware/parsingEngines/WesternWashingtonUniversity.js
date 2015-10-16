
import request from 'request';

export default class WesternWashingtonUniversity {

  getSearchCriteria(callback) {
    let options = {
      uri: 'https://admin.wwu.edu/pls/wwis/wwsktime.SelClass',
      method: 'GET'
    };

    request(options, callback);
  }

  search() {

  }
}
